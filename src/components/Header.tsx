import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Andrea's Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-slate-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all font-medium relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 hover:text-indigo-600 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4 flex flex-col gap-2 overflow-hidden"
            >
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-slate-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent hover:bg-indigo-50/50 transition-all font-medium py-2 px-3 rounded-lg relative overflow-hidden group"
                  onClick={handleMenuClick}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}