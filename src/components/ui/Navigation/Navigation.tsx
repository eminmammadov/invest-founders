'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TbArrowUpRight } from "react-icons/tb";
import styles from './Navigation.module.css';
import { NavigationProps } from './types';

/**
 * Navigation Component
 * 
 * A responsive navigation component that displays navigation items with support for dropdown menus.
 * Features smooth animations, accessibility support, and click-outside-to-close functionality.
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
 * <Navigation items={navItems} className="custom-nav" />
 * ```
 * 
 * @param {NavigationProps} props - The component props
 * @param {NavItem[]} props.items - Array of navigation items
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered navigation component
 * 
 * @features
 * - Dropdown menu support with smooth animations
 * - Click outside to close dropdown functionality
 * - Accessibility support with ARIA attributes
 * - Responsive design
 * - Icon support for dropdown items
 * - Hover effects with arrow indicators
 * 
 * @accessibility
 * - ARIA expanded and haspopup attributes
 * - Keyboard navigation support
 * - Screen reader friendly labels
 * 
 * @interactions
 * - Click to toggle dropdown
 * - Click outside to close dropdown
 * - Hover effects on dropdown items
 */
export const Navigation: React.FC<NavigationProps> = ({ items, className = '' }) => {
  // Dropdown item descriptions
  const dropdownDescriptions = {
    PRELIST: 'Discover upcoming projects and early opportunities.',
    PORTFOLIO: 'Track your investments and portfolio performance.',
    MARKET: 'Real-time market data and analysis tools.'
  };

  // Badge text
  const proBadgeText = 'Pro';

  // Accessibility labels
  const accessibility = {
    DROPDOWN_BUTTON_ARIA_HASPOPUP_VALUE: true
  };

  // Icon configurations
  const icons = {
    DROPDOWN_ARROW_SIZE: 16,
    ITEM_ARROW_SIZE: 16,
    ITEM_ICON_SIZE: 20
  };
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
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
                              <svg width={icons.ITEM_ICON_SIZE} height={icons.ITEM_ICON_SIZE} viewBox="0 0 20 20" fill="none">
                                <path d="M3 4H17V6H3V4ZM3 8H17V10H3V8ZM3 12H13V14H3V12Z" fill="currentColor"/>
                              </svg>
                            )}
                            {dropdownItem.label === 'Portfolio' && (
                              <svg width={icons.ITEM_ICON_SIZE} height={icons.ITEM_ICON_SIZE} viewBox="0 0 20 20" fill="none">
                                <path d="M2 3H18V17H2V3ZM4 5V15H16V5H4ZM6 7H14V9H6V7ZM6 11H14V13H6V11Z" fill="currentColor"/>
                              </svg>
                            )}
                            {dropdownItem.label === 'Market' && (
                              <svg width={icons.ITEM_ICON_SIZE} height={icons.ITEM_ICON_SIZE} viewBox="0 0 20 20" fill="none">
                                <path d="M10 2L12.5 7.5H18L14 11L15.5 16.5L10 13L4.5 16.5L6 11L2 7.5H7.5L10 2Z" fill="currentColor"/>
                              </svg>
                            )}
                          </div>
                          <div className={styles.itemText}>
                            <div className={styles.itemTitle}>
                              {dropdownItem.label}
                              {dropdownItem.label === 'Portfolio' && (
                                <span className={styles.proBadge}>{proBadgeText}</span>
                              )}
                            </div>
                            <div className={styles.itemDescription}>
                              {dropdownItem.label === 'Prelist' && dropdownDescriptions.PRELIST}
                              {dropdownItem.label === 'Portfolio' && dropdownDescriptions.PORTFOLIO}
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
};
