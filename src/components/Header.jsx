import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  Code,
  Gamepad2,
  FileText,
  MessageCircle,
} from "lucide-react";

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "resume", label: "Resume/CV", icon: FileText },
    { id: "projects", label: "Projects", icon: Code },
    // { id: "solitaire", label: "Solitaire", icon: Gamepad2 },
    { id: "contact", label: "Contact Me", icon: MessageCircle },
  ];

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sky-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-sky-900">Greg Stula</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "text-sky-600 bg-sky-100/50"
                    : "text-gray-600 hover:text-sky-900 hover:bg-sky-50"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-sky-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-sky-200/50 shadow-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === id
                    ? "text-sky-600 bg-sky-100/50"
                    : "text-gray-600 hover:text-sky-900 hover:bg-sky-50"
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
