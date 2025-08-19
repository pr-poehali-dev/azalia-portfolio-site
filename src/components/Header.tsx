import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  navItems: Array<{ id: string; label: string }>;
  activeSection: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ 
  navItems, 
  activeSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  scrollToSection 
}: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border" style={{ backgroundColor: '#3d2f24' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-caveat font-bold" style={{ color: '#f5f0e8' }}>@azaluk</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors whitespace-nowrap ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-70'
                }`}
                style={{ color: '#f5f0e8' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden bg-transparent hover:bg-white/10 p-3"
              style={{ color: '#f5f0e8' }}
              size="icon"
              variant="ghost"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>

            {/* Telegram Button */}
            <Button 
              onClick={() => window.open('https://t.me/azaluk', '_blank')}
              className="hover:bg-white/10 p-3"
              style={{ backgroundColor: '#3d2f24', color: '#f5f0e8' }}
              size="icon"
            >
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm transition-colors ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-70'
                  }`}
                  style={{ color: '#f5f0e8' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;