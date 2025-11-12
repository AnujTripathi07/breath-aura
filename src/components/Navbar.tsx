import { Moon, Sun, Menu, Wind, AlertTriangle, Newspaper, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useMagneticHover } from '@/hooks/useMagneticHover';

interface NavbarProps {
  onLiveAQIClick: () => void;
  onHealthAlertsClick: () => void;
  onStoriesClick: () => void;
  onForecastClick: () => void;
}

export const Navbar = ({ onLiveAQIClick, onHealthAlertsClick, onStoriesClick, onForecastClick }: NavbarProps) => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const liveAQIRef = useMagneticHover<HTMLButtonElement>();
  const alertsRef = useMagneticHover<HTMLButtonElement>();
  const storiesRef = useMagneticHover<HTMLButtonElement>();
  const forecastRef = useMagneticHover<HTMLButtonElement>();

  return (
    <nav className="tubelight-border fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="magnetic"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Center Navigation Items */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              ref={liveAQIRef}
              variant="ghost"
              className="magnetic flex items-center gap-2"
              onClick={onLiveAQIClick}
            >
              <Wind className="h-4 w-4" />
              <span>Live AQI</span>
            </Button>
            <Button
              ref={alertsRef}
              variant="ghost"
              className="magnetic flex items-center gap-2"
              onClick={onHealthAlertsClick}
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Health Alerts</span>
            </Button>
            <Button
              ref={storiesRef}
              variant="ghost"
              className="magnetic flex items-center gap-2"
              onClick={onStoriesClick}
            >
              <Newspaper className="h-4 w-4" />
              <span>Top Stories</span>
            </Button>
            <Button
              ref={forecastRef}
              variant="ghost"
              className="magnetic flex items-center gap-2"
              onClick={onForecastClick}
            >
              <Calendar className="h-4 w-4" />
              <span>7-Day Forecast</span>
            </Button>
          </div>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="magnetic"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-4">
          <div className="text-muted-foreground text-center py-8">
            <p className="text-lg">Coming Soon</p>
            <p className="text-sm mt-2">More features are on the way!</p>
          </div>
        </div>
      )}
    </nav>
  );
};
