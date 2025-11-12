import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';
import { Newspaper, Calendar } from 'lucide-react';

interface StoriesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const stories = [
  {
    title: 'Air Quality Improves in Major Cities',
    date: '2 hours ago',
    summary: 'Recent data shows significant improvement in air quality across major metropolitan areas.',
    category: 'Good News',
  },
  {
    title: 'New EPA Guidelines Released',
    date: '5 hours ago',
    summary: 'EPA announces updated air quality standards for industrial emissions.',
    category: 'Policy',
  },
  {
    title: 'Wildfire Smoke Affects Western States',
    date: '1 day ago',
    summary: 'Air quality alerts issued for several western states due to wildfire activity.',
    category: 'Alert',
  },
  {
    title: 'Electric Vehicle Adoption Reduces Urban Pollution',
    date: '2 days ago',
    summary: 'Study shows correlation between EV adoption and improved city air quality.',
    category: 'Research',
  },
  {
    title: 'Global Air Quality Index Shows Progress',
    date: '3 days ago',
    summary: 'Annual report reveals gradual improvement in worldwide air quality metrics.',
    category: 'Report',
  },
];

export const StoriesModal = ({ open, onOpenChange }: StoriesModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-navy-medium border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cyan-bright flex items-center gap-2">
            <Newspaper className="h-6 w-6" />
            Top Stories
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {stories.map((story, index) => (
            <Card key={index} className="card-glow p-6 hover:shadow-glow transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs px-2 py-1 rounded-full bg-cyan-bright/20 text-cyan-bright">
                  {story.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {story.date}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-muted-foreground">{story.summary}</p>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
