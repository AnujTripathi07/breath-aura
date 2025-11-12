import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-bright">About</h3>
            <p className="text-sm text-muted-foreground">
              Real-time air quality monitoring platform providing comprehensive data on pollutants and environmental conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-bright">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Live AQI</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Health Alerts</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Top Stories</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Forecast</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-bright">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-cyan-bright transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Data Sources</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-bright">Contact</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-cyan-bright transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyan-bright transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyan-bright transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyan-bright transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">info@airquality.com</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Air Quality Monitor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
