import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card } from './ui/card';
import { MapPin, TrendingUp } from 'lucide-react';

export const MapAndTrends = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="fade-in-up py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AQI Map View */}
          <Card className="card-glow p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-cyan-bright" />
              <h3 className="text-2xl font-bold">AQI Map View</h3>
            </div>
            
            <div className="aspect-video bg-navy-medium rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Map Placeholder with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-bright/20 via-blue-accent/20 to-transparent animate-pulse" />
              <div className="relative z-10 text-center">
                <MapPin className="h-16 w-16 text-cyan-bright mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Good</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Moderate</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Unhealthy</p>
              </div>
            </div>
          </Card>

          {/* Graphical Trends */}
          <Card className="card-glow p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-cyan-bright" />
              <h3 className="text-2xl font-bold">Graphical Trends</h3>
            </div>

            <div className="aspect-video bg-navy-medium rounded-lg p-4">
              {/* Simple trend visualization */}
              <div className="h-full flex items-end justify-around gap-2">
                {[65, 45, 78, 55, 40, 60, 50, 70].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-cyan-bright to-blue-accent rounded-t-lg transition-all duration-500 hover:opacity-80"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average AQI:</span>
                <span className="font-semibold text-cyan-bright">58</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Peak Time:</span>
                <span className="font-semibold">3:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Trend:</span>
                <span className="font-semibold text-green-500">↓ Improving</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
