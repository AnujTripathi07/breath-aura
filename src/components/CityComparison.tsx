import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowRight } from 'lucide-react';

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];

export const CityComparison = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="fade-in-up py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-bright to-blue-accent bg-clip-text text-transparent">
          Compare Cities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Comparison Tool */}
          <Card className="lg:col-span-2 card-glow p-8">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <Select>
                <SelectTrigger className="flex-1 bg-navy-medium border-border">
                  <SelectValue placeholder="Select first city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <ArrowRight className="h-6 w-6 text-cyan-bright rotate-90 md:rotate-0" />

              <Select>
                <SelectTrigger className="flex-1 bg-navy-medium border-border">
                  <SelectValue placeholder="Select second city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-gradient-to-r from-cyan-bright to-blue-accent hover:shadow-glow">
              Compare Air Quality
            </Button>

            {/* Comparison Results Placeholder */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-cyan-bright">City A</h3>
                <div className="space-y-2">
                  {['PM 2.5', 'PM 10', 'CO', 'NO₂', 'SO₂'].map((pollutant) => (
                    <div key={pollutant} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{pollutant}:</span>
                      <span className="font-semibold">--</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-accent">City B</h3>
                <div className="space-y-2">
                  {['PM 2.5', 'PM 10', 'CO', 'NO₂', 'SO₂'].map((pollutant) => (
                    <div key={pollutant} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{pollutant}:</span>
                      <span className="font-semibold">--</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Ranking Table */}
          <Card className="card-glow p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Top 8 Hottest Cities</h3>
            <div className="space-y-3">
              {cities.map((city, index) => (
                <div
                  key={city}
                  className="flex items-center justify-between p-3 bg-navy-medium rounded-lg hover:bg-navy-light transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-cyan-bright">#{index + 1}</span>
                    <div>
                      <p className="font-semibold">{city}</p>
                      <p className="text-xs text-muted-foreground">AQI: {150 + index * 10}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-orange-500">Unhealthy</p>
                    <p className="text-xs text-muted-foreground">32°C</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
