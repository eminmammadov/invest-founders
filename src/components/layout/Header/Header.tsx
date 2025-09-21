'use client';

import React, { useState } from 'react';
import { Logo } from '../../ui/Logo';
import { Navigation } from '../Navigation';
import { Button } from '../../ui/Button';
import { HamburgerMenu } from '../../ui/HamburgerMenu';
import styles from './Header.module.css';
import { HeaderProps } from './types';

/**
 * Header Component
 * 
 * The main header component that provides navigation and branding for the application.
 * Features responsive design with desktop navigation and mobile hamburger menu.
 * 
 * @component
 * @example
 * ```tsx
 * <Header className="custom-header" />
 * ```
 * 
 * @param {HeaderProps} props - The component props
 * @param {string} [props.className=''] - Additional CSS classes to apply to the header
 * @returns {JSX.Element} The rendered header component
 * 
 * @features
 * - Responsive design (desktop, tablet, mobile)
 * - Logo with link to home page
 * - Desktop navigation with dropdown menu
 * - Mobile hamburger menu with slide-out navigation
 * - CTA button ("Join System") on both desktop and mobile
 * - Accessibility support with ARIA labels
 * - Smooth animations and transitions
 * 
 * @accessibility
 * - Proper ARIA labels for interactive elements
 * - Keyboard navigation support
 * - Screen reader friendly
 * 
 * @responsive
 * - Desktop: Full navigation with dropdown
 * - Tablet: Condensed navigation
 * - Mobile: Hamburger menu with slide-out navigation
 */
export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Button text
  const ctaButtonText = 'Join System';

  // Logo configuration
  const logoConfig = {
    variant: 'white' as const,
    size: 'small' as const
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <div className={styles.headerContainer}>
          {/* Left Side - Logo */}
          <div className={styles.headerLeft}>
            <Logo variant={logoConfig.variant} size={logoConfig.size} />
          </div>

          {/* Center - Navigation (Desktop) */}
          <div className={styles.headerCenter}>
            <Navigation />
          </div>

          {/* Right Side - CTA Button (Desktop) / Mobile Buttons (Mobile) */}
          <div className={styles.headerRight}>
            {/* Desktop CTA Button */}
            <div className={styles.desktopCTA}>
              <Button variant="primary" size="small">
                {ctaButtonText}
              </Button>
            </div>

            {/* Mobile Buttons */}
            <div className={styles.mobileButtons}>
              {/* Mobile CTA Button */}
              <div className={styles.mobileCTA}>
                <Button variant="primary" size="small">
                  {ctaButtonText}
                </Button>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className={styles.mobileMenu}>
                <HamburgerMenu
                  isOpen={isMobileMenuOpen}
                  onClick={handleMobileMenuToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Navigation */}
      <Navigation
        variant="mobile"
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />
    </>
  );
};
