'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TbArrowBadgeUp, TbArrowBadgeDown, TbBrandX } from 'react-icons/tb';
import styles from './Footer.module.css';
import { FooterProps, FooterLink } from './types';
import { Logo } from '../../ui/Logo';

/**
 * Footer Component Constants
 * 
 * Footer links and configuration data.
 */
const FOOTER_CONSTANTS = {
  SOCIAL_LINKS: {
    X: {
      href: 'https://x.com/InvestFounders',
      target: '_blank' as const,
    }
  },
  DROPDOWN_LINKS: [
    {
      label: 'Terms of Service',
      href: '/terms-of-use',
      target: '_self' as const,
    },
    {
      label: 'Privacy Policy',
      href: '/privacy-policy',
      target: '_self' as const,
    },
    {
      label: 'Investor Relations',
      href: '/investor-relations',
      target: '_self' as const,
    },
  ] as FooterLink[],
} as const;

/**
 * Footer Component
 * 
 * A sticky footer component with logo, copyright information,
 * dropdown navigation menu, and social media links.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Footer />
 * 
 * // With custom styling
 * <Footer className="custom-footer" />
 * 
 * // Non-sticky footer
 * <Footer sticky={false} />
 * ```
 * 
 * @param {FooterProps} props - The component props
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @param {boolean} [props.sticky=true] - Whether the footer should be sticky to bottom
 * @returns {JSX.Element} The rendered footer component
 * 
 * @features
 * - Sticky positioning to bottom of viewport
 * - Logo and copyright information
 * - Dropdown navigation menu with legal links
 * - Social media integration (X/Twitter)
 * - Responsive design for all screen sizes
 * - Click outside to close dropdown functionality
 * 
 * @accessibility
 * - Proper semantic HTML structure
 * - Keyboard navigation support
 * - ARIA labels for interactive elements
 * - High contrast text for readability
 */
export const Footer: React.FC<FooterProps> = ({
  className = '',
  sticky = true,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className={`${styles.footer} ${className}`} style={{ position: sticky ? 'sticky' : 'static' }}>
      {/* Left Section - Logo */}
      <div className={styles.footerLeft}>
        <Logo size="small" />
      </div>

      {/* Right Section - Dropdown and Social Links */}
      <div className={styles.footerRight}>
        {/* Dropdown Menu */}
        <div className={styles.dropdownContainer} ref={dropdownRef}>
          <button
            className={`${styles.dropdownButton} ${isDropdownOpen ? styles.active : ''}`}
            onClick={toggleDropdown}
            aria-label="Open navigation menu"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            {isDropdownOpen ? <TbArrowBadgeDown /> : <TbArrowBadgeUp />}
          </button>
          
          <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
            {FOOTER_CONSTANTS.DROPDOWN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
                className={styles.dropdownLink}
                onClick={() => setIsDropdownOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media Link */}
        <a
          href={FOOTER_CONSTANTS.SOCIAL_LINKS.X.href}
          target={FOOTER_CONSTANTS.SOCIAL_LINKS.X.target}
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Visit our X (Twitter) page"
        >
          <TbBrandX />
        </a>
      </div>
    </footer>
  );
};
