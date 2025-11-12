import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { useState } from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

interface ForecastModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];

const pollutants = [
  { name: 'PM 2.5', color: 'from-yellow-500 to-orange-500' },
  { name: 'PM 10', color: 'from-orange-500 to-red-500' },
  { name: 'CO', color: 'from-green-500 to-emerald-500' },
  { name: 'NO₂', color: 'from-cyan-500 to-blue-500' },
  { name: 'SO₂', color: 'from-blue-500 to-indigo-500' },
];

export const ForecastModal = ({ open, onOpenChange }: ForecastModalProps) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPollutant, setSelectedPollutant] = useState<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto bg-navy-medium border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cyan-bright flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            7-Day AQI Forecast
          </DialogTitle>
        </DialogHeader>

        {/* City Selection */}
        {!selectedCity ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">Select a city to view the forecast:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Button
                  key={city}
                  variant="outline"
                  className="h-20 card-glow"
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header with city selector */}
            <div className="flex items-center gap-4">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-[200px] bg-navy-dark border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* AQI Line Graph */}
            <Card className="card-glow p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-cyan-bright" />
                <h3 className="text-xl font-bold">AQI Trend</h3>
              </div>
              <div className="h-64 bg-navy-dark rounded-lg p-4 relative">
                {/* Simple line graph visualization */}
                <div className="h-full flex items-end justify-around gap-2">
                  {[65, 45, 78, 95, 110, 85, 60].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative">
                      <div className="absolute -top-8 hidden group-hover:block bg-popover px-2 py-1 rounded text-xs border border-border">
                        <p>AQI: {height}</p>
                        <p className="text-muted-foreground">
                          {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        </p>
                      </div>
                      <div
                        className="w-full bg-gradient-to-t from-cyan-bright to-blue-accent rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                        style={{ height: `${(height / 150) * 100}%` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Pollutant Cards */}
            <div>
              <h3 className="text-lg font-bold mb-4">Individual Pollutants</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {pollutants.map((pollutant) => (
                  <Card
                    key={pollutant.name}
                    className="card-glow p-4 cursor-pointer hover:shadow-glow transition-all"
                    onClick={() => setSelectedPollutant(pollutant.name)}
                  >
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${pollutant.color} mb-2`} />
                    <p className="font-semibold text-center">{pollutant.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Expanded Pollutant View */}
            {selectedPollutant && (
              <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4">
                <Card className="card-glow p-8 max-w-4xl w-full">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-cyan-bright">{selectedPollutant} Forecast</h3>
                    <Button variant="ghost" onClick={() => setSelectedPollutant(null)}>Close</Button>
                  </div>
                  <div className="h-96 bg-navy-dark rounded-lg p-6">
                    <div className="h-full flex items-end justify-around gap-2">
                      {[45, 38, 62, 55, 70, 48, 42].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative">
                          <div className="absolute -top-8 hidden group-hover:block bg-popover px-2 py-1 rounded text-xs border border-border">
                            <p>{selectedPollutant}: {height}</p>
                          </div>
                          <div
                            className="w-full bg-gradient-to-t from-cyan-bright to-blue-accent rounded-t-lg transition-all duration-300"
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-xs text-muted-foreground">
                            {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
