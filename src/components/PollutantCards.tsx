import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { Card } from './ui/card';

const pollutants = [
  { name: 'PM 2.5', value: '45', unit: 'µg/m³', status: 'Moderate', color: 'from-yellow-500 to-orange-500' },
  { name: 'PM 10', value: '89', unit: 'µg/m³', status: 'Unhealthy', color: 'from-orange-500 to-red-500' },
  { name: 'CO', value: '1.2', unit: 'mg/m³', status: 'Good', color: 'from-green-500 to-emerald-500' },
  { name: 'NO₂', value: '34', unit: 'µg/m³', status: 'Good', color: 'from-cyan-500 to-blue-500' },
  { name: 'SO₂', value: '12', unit: 'µg/m³', status: 'Good', color: 'from-blue-500 to-indigo-500' },
];

export const PollutantCards = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="fade-in-up py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-bright to-blue-accent bg-clip-text text-transparent">
          Air Quality Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pollutants.map((pollutant, index) => (
            <PollutantCard key={pollutant.name} pollutant={pollutant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PollutantCardProps {
  pollutant: {
    name: string;
    value: string;
    unit: string;
    status: string;
    color: string;
  };
  index: number;
}

const PollutantCard = ({ pollutant, index }: PollutantCardProps) => {
  const cardRef = useMagneticHover<HTMLDivElement>(0.15);

  return (
    <Card
      ref={cardRef}
      className="magnetic card-glow p-6 text-center relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${pollutant.color} opacity-10`} />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">{pollutant.name}</h3>
        <div className="text-4xl font-bold mb-1 bg-gradient-to-br from-cyan-bright to-cyan-glow bg-clip-text text-transparent">
          {pollutant.value}
        </div>
        <div className="text-sm text-muted-foreground mb-3">{pollutant.unit}</div>
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${pollutant.color} text-white`}>
          {pollutant.status}
        </div>
      </div>
    </Card>
  );
};
