import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTop = ({ showScrollTop, scrollToTop }: ScrollToTopProps) => {
  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground hover:bg-accent/80 p-3 rounded-full shadow-lg"
      size="icon"
    >
      <Icon name="ArrowUp" size={20} />
    </Button>
  );
};

export default ScrollToTop;