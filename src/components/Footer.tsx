import React from 'react';
import { personalInfo, navItems } from '../utils/constants';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-glass-border bg-void/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left — Brand */}
          <div>
            <h3 className="font-mono text-xl font-bold gradient-text mb-3">
              {personalInfo.name}
            </h3>
            <p className="text-text-secondary text-sm mb-4 font-mono">
              {personalInfo.title}
            </p>
            <SocialLinks iconSize={20} />
          </div>

          {/* Center — Quick Links */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-3">
              {'>'} quick_links:
            </h4>
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="font-mono text-xs text-text-secondary hover:text-cyan-bright transition-colors"
                  >
                    <span className="text-text-mono-dim">~/</span>{item.href.substring(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-3">
              {'>'} contact_info:
            </h4>
            <ul className="space-y-1.5 font-mono text-xs text-text-secondary">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-bright transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-bright transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-text-mono-dim">{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom — Copyright */}
        <div className="pt-6 border-t border-glass-border text-center">
          <p className="font-mono text-xs text-text-mono-dim">
            © {currentYear} {personalInfo.name} // All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
