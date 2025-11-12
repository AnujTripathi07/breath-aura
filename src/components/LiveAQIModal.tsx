import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Search, AlertCircle } from 'lucide-react';

interface LiveAQIModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cities = [
  { name: 'New York', aqi: 45, status: 'Good' },
  { name: 'Los Angeles', aqi: 89, status: 'Moderate' },
  { name: 'Chicago', aqi: 120, status: 'Unhealthy' },
  { name: 'Houston', aqi: 65, status: 'Moderate' },
  { name: 'Phoenix', aqi: 150, status: 'Unhealthy' },
  { name: 'Philadelphia', aqi: 42, status: 'Good' },
  { name: 'San Antonio', aqi: 78, status: 'Moderate' },
  { name: 'San Diego', aqi: 35, status: 'Good' },
];

export const LiveAQIModal = ({ open, onOpenChange }: LiveAQIModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-navy-medium border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cyan-bright">Live AQI Data</DialogTitle>
        </DialogHeader>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for a city..."
            className="pl-10 bg-navy-dark border-border"
          />
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {cities.map((city) => (
            <Card key={city.name} className="card-glow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">{city.status}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-cyan-bright">{city.aqi}</div>
                  <p className="text-xs text-muted-foreground">AQI</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Health Alerts */}
        <Card className="card-glow p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-yellow-500" />
            <h3 className="text-xl font-bold">Health Alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="font-semibold text-yellow-500">Moderate Air Quality Alert</p>
              <p className="text-sm text-muted-foreground mt-1">Sensitive groups should limit outdoor activities</p>
            </div>
          </div>
        </Card>

        {/* What Will Happen Card */}
        <Card className="card-glow p-6 mt-4">
          <h3 className="text-xl font-bold mb-4 text-cyan-bright">What Will Happen?</h3>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              • People with respiratory conditions may experience discomfort
            </p>
            <p className="text-muted-foreground">
              • Outdoor activities should be limited for sensitive groups
            </p>
            <p className="text-muted-foreground">
              • Consider wearing a mask in heavily polluted areas
            </p>
            <p className="text-muted-foreground">
              • Keep windows closed during peak pollution hours
            </p>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
