import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useTextScramble } from '@/hooks/useTextScramble';
import { useMagneticHover } from '@/hooks/useMagneticHover';

const phrases = [
  'Monitor air quality in real-time',
  'Track pollutants in your area',
  'Stay informed about air conditions',
  'Breathe easier with data',
];

export const HeroSection = () => {
  const scrambledText = useTextScramble(phrases, 4000);
  const searchRef = useMagneticHover<HTMLDivElement>();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-bright/10 via-transparent to-transparent" />

      {/* SVG Path Drawing Animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 200 Q 400 100 800 200 T 1600 200"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          className="draw-path"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(195 100% 50%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(195 100% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(195 100% 50%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-bright via-blue-accent to-cyan-glow bg-clip-text text-transparent">
          Predict What You're Going to Breathe
        </h1>

        {/* Scrambled Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-scramble h-8">
          {scrambledText}
        </p>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className="magnetic card-glow rounded-2xl p-2 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 bg-navy-medium rounded-xl p-4">
            <Search className="h-6 w-6 text-cyan-bright" />
            <Input
              placeholder="Search for your city..."
              className="border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="bg-gradient-to-r from-cyan-bright to-blue-accent hover:shadow-glow">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
