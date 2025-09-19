'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './MobileMenuNavigation.module.css';
import { MobileMenuNavigationProps } from './types';

/**
 * MobileMenuNavigation Component
 * 
 * A mobile navigation menu that slides in from the top when the hamburger menu is opened.
 * Features smooth animations, accessibility support, and responsive design.
 * 
 * @component
 * @example
 * ```tsx
 * const navItems = [
 *   { label: 'Home', href: '/home' },
 *   { 
 *     label: 'Tools', 
 *     href: '#', 
 *     isDropdown: true,
 *     dropdownItems: [
 *       { label: 'Prelist', href: '/prelist' },
 *       { label: 'Portfolio', href: '/portfolio' }
 *     ]
 *   }
 * ];
 * 
 * <MobileMenuNavigation 
 *   isOpen={isMenuOpen} 
 *   onClose={handleClose} 
 *   items={navItems} 
 * />
 * ```
 * 
 * @param {MobileMenuNavigationProps} props - The component props
 * @param {boolean} props.isOpen - Whether the mobile menu is open
 * @param {() => void} props.onClose - Function to call when closing the menu
 * @param {MobileNavItem[]} props.items - Array of navigation items
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered mobile menu navigation component
 * 
 * @features
 * - Smooth slide-in animation from top
 * - Backdrop overlay with click-to-close
 * - Escape key to close
 * - Auto-close on window resize (desktop breakpoint)
 * - Body scroll prevention when open
 * - Dropdown support for nested navigation
 * - Accessibility support
 * 
 * @accessibility
 * - Proper ARIA attributes
 * - Keyboard navigation support
 * - Screen reader friendly
 * 
 * @interactions
 * - Click backdrop to close
 * - Press Escape key to close
 * - Auto-close on window resize
 * - Click navigation items to close menu
 */
export const MobileMenuNavigation: React.FC<MobileMenuNavigationProps> = ({
  isOpen,
  onClose,
  items,
  className = ''
}) => {
  // Badge text
  const proBadgeText = 'Premium';

  // Accessibility labels
  const accessibility = {
    BACKDROP_ARIA_HIDDEN_VALUE: true
  };

  // Event handlers
  const events = {
    ESC_KEY: 'Escape',
    RESIZE_BREAKPOINT: 768
  };

  // Icon configurations
  const icons = {
    DROPDOWN_ARROW_SIZE: 16
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === events.ESC_KEY) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, events.ESC_KEY]);

  // Handle window resize - close menu when screen gets wider
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > events.RESIZE_BREAKPOINT && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose, events.RESIZE_BREAKPOINT]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className={styles.backdrop} 
          onClick={onClose}
          aria-hidden={accessibility.BACKDROP_ARIA_HIDDEN_VALUE}
        />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''} ${className}`}>
        <div className={styles.mobileMenuContent}>

          {/* Navigation Items */}
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {items.map((item, index) => (
                <li key={index} className={styles.mobileNavItem}>
                  {item.isDropdown && item.dropdownItems ? (
                    <div className={styles.mobileDropdown}>
                      <div className={styles.mobileDropdownHeader}>
                        <span className={styles.mobileDropdownTitle}>{item.label}</span>
                        <svg
                          className={styles.mobileDropdownIcon}
                          width={icons.DROPDOWN_ARROW_SIZE}
                          height={icons.DROPDOWN_ARROW_SIZE}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <ul className={styles.mobileDropdownList}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <li key={dropdownIndex} className={styles.mobileDropdownItem}>
                            <Link
                              href={dropdownItem.href}
                              className={styles.mobileDropdownLink}
                              onClick={onClose}
                            >
                              {dropdownItem.label}
                              {dropdownItem.label === 'Portfolio' && (
                                <span className={styles.mobileProBadge}>{proBadgeText}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </>
  );
};
