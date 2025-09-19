'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TbArrowUpRight, TbClearAll, TbCircuitResistor, TbCircuitCapacitorPolarized } from "react-icons/tb";
import styles from './Navigation.module.css';
import { NavigationProps } from './types';

/**
 * Navigation Component
 * 
 * A unified responsive navigation component that handles both desktop and mobile navigation.
 * Features smooth animations, accessibility support, and responsive design.
 * 
 * 
 * @component
 * @example
 * ```tsx
 * // Desktop Navigation
 * <Navigation className="desktop-nav" />
 * 
 * // Mobile Navigation
 * <Navigation 
 *   variant="mobile" 
 *   isOpen={isMobileMenuOpen} 
 *   onClose={handleMobileMenuClose} 
 *   className="mobile-nav" 
 * />
 * ```
 * 
 * @param {NavigationProps} props - The component props
 * @param {'desktop' | 'mobile'} [props.variant='desktop'] - Navigation variant
 * @param {boolean} [props.isOpen] - Whether mobile menu is open (mobile variant only)
 * @param {() => void} [props.onClose] - Function to close mobile menu (mobile variant only)
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered navigation component
 * 
 * @features
 * - Unified desktop and mobile navigation
 * - Dropdown menu support with smooth animations
 * - Click outside to close dropdown functionality
 * - Mobile slide-in animation with backdrop
 * - Escape key and resize handling for mobile
 * - Accessibility support with ARIA attributes
 * - Icon support for dropdown items
 * - Hover effects with arrow indicators
 * 
 * @accessibility
 * - ARIA expanded and haspopup attributes
 * - Keyboard navigation support
 * - Screen reader friendly labels
 * - Body scroll prevention on mobile
 * 
 * @interactions
 * - Click to toggle dropdown (desktop)
 * - Click outside to close dropdown
 * - Click backdrop to close mobile menu
 * - Press Escape key to close mobile menu
 * - Auto-close on window resize (mobile)
 */
export const Navigation: React.FC<NavigationProps> = ({ 
  variant = 'desktop', 
  isOpen, 
  onClose, 
  className = '' 
}) => {
  // Navigation items configuration
  const navigationItems = [
    {
      label: 'Tools',
      href: '#',
      isDropdown: true,
      dropdownItems: [
        { label: 'Prelist', href: '/prelist' },
        { label: 'Crypto Portfolio', href: '/portfolio' },
        { label: 'Market', href: '/market' }
      ]
    },
    { label: 'About us', href: '/about' },
    { label: 'Members', href: '/members' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' }
  ];

  // Dropdown item descriptions
  const dropdownDescriptions = {
    PRELIST: 'Discover upcoming projects and early opportunities.',
    CRYPTO_PORTFOLIO: 'Track your investments and portfolio performance.',
    MARKET: 'Real-time market data and analysis tools.'
  };

  // Badge text
  const proBadgeText = 'Premium';

  // Accessibility labels
  const accessibility = {
    DROPDOWN_BUTTON_ARIA_HASPOPUP_VALUE: true,
    BACKDROP_ARIA_HIDDEN_VALUE: true
  };

  // Event handlers
  const events = {
    ESC_KEY: 'Escape',
    RESIZE_BREAKPOINT: 768
  };

  // Icon configurations
  const icons = {
    DROPDOWN_ARROW_SIZE: 16,
    ITEM_ARROW_SIZE: 16,
    ITEM_ICON_SIZE: 20
  };

  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Desktop: Close dropdown when clicking outside
  useEffect(() => {
    if (variant === 'desktop') {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [variant]);

  // Mobile: Prevent body scroll when menu is open
  useEffect(() => {
    if (variant === 'mobile') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [variant, isOpen]);

  // Mobile: Handle escape key
  useEffect(() => {
    if (variant === 'mobile' && isOpen && onClose) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === events.ESC_KEY) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [variant, isOpen, onClose, events.ESC_KEY]);

  // Mobile: Handle window resize - close menu when screen gets wider
  useEffect(() => {
    if (variant === 'mobile' && isOpen && onClose) {
      const handleResize = () => {
        if (window.innerWidth > events.RESIZE_BREAKPOINT) {
          onClose();
        }
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [variant, isOpen, onClose, events.RESIZE_BREAKPOINT]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Render desktop navigation
  if (variant === 'desktop') {
    return (
      <nav className={`${styles.navigation} ${className}`}>
        <ul className={styles.navList}>
          {navigationItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              {item.isDropdown ? (
                <div className={styles.dropdownContainer} ref={dropdownRef}>
                  <button
                    className={`${styles.navLink} ${styles.dropdownButton}`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup={accessibility.DROPDOWN_BUTTON_ARIA_HASPOPUP_VALUE}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`${styles.dropdownIcon} ${activeDropdown === item.label ? styles.open : ''}`}
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
                  </button>
                  
                  {activeDropdown === item.label && item.dropdownItems && (
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownContent}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className={styles.dropdownItem}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className={styles.itemIcon}>
                              {dropdownItem.label === 'Prelist' && (
                                <TbClearAll size={icons.ITEM_ICON_SIZE} />
                              )}
                              {dropdownItem.label === 'Crypto Portfolio' && (
                                <TbCircuitResistor size={icons.ITEM_ICON_SIZE} />
                              )}
                              {dropdownItem.label === 'Market' && (
                                <TbCircuitCapacitorPolarized size={icons.ITEM_ICON_SIZE} />
                              )}
                            </div>
                            <div className={styles.itemText}>
                              <div className={styles.itemTitle}>
                                {dropdownItem.label}
                                {dropdownItem.label === 'Crypto Portfolio' && (
                                  <span className={styles.proBadge}>{proBadgeText}</span>
                                )}
                              </div>
                              <div className={styles.itemDescription}>
                                {dropdownItem.label === 'Prelist' && dropdownDescriptions.PRELIST}
                                {dropdownItem.label === 'Crypto Portfolio' && dropdownDescriptions.CRYPTO_PORTFOLIO}
                                {dropdownItem.label === 'Market' && dropdownDescriptions.MARKET}
                              </div>
                            </div>
                            <div className={styles.itemArrow}>
                              <TbArrowUpRight size={icons.ITEM_ARROW_SIZE} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Render mobile navigation
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
              {navigationItems.map((item, index) => (
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
                              <div className={styles.mobileItemIcon}>
                                {dropdownItem.label === 'Prelist' && (
                                  <TbClearAll size={icons.ITEM_ICON_SIZE} />
                                )}
                                {dropdownItem.label === 'Crypto Portfolio' && (
                                  <TbCircuitResistor size={icons.ITEM_ICON_SIZE} />
                                )}
                                {dropdownItem.label === 'Market' && (
                                  <TbCircuitCapacitorPolarized size={icons.ITEM_ICON_SIZE} />
                                )}
                              </div>
                              <div className={styles.mobileItemText}>
                                <div className={styles.mobileItemTitle}>
                                  {dropdownItem.label}
                                  {dropdownItem.label === 'Crypto Portfolio' && (
                                    <span className={styles.mobileProBadge}>{proBadgeText}</span>
                                  )}
                                </div>
                                <div className={styles.mobileItemDescription}>
                                  {dropdownItem.label === 'Prelist' && dropdownDescriptions.PRELIST}
                                  {dropdownItem.label === 'Crypto Portfolio' && dropdownDescriptions.CRYPTO_PORTFOLIO}
                                  {dropdownItem.label === 'Market' && dropdownDescriptions.MARKET}
                                </div>
                              </div>
                              <div className={styles.mobileItemArrow}>
                                <TbArrowUpRight size={icons.ITEM_ARROW_SIZE} />
                              </div>
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
