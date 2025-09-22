import React from 'react';
import styles from './HamburgerMenu.module.css';
import { HamburgerMenuProps } from './types';

/**
 * HamburgerMenu Component
 * 
 * An animated hamburger menu button that transforms into an "X" when opened.
 * Features smooth CSS animations and accessibility support.
 * 
 * @component
 * @example
 * ```tsx
 * <HamburgerMenu 
 *   isOpen={isMenuOpen} 
 *   onClick={handleToggle} 
 *   className="custom-hamburger" 
 * />
 * ```
 * 
 * @param {HamburgerMenuProps} props - The component props
 * @param {boolean} props.isOpen - Whether the menu is open (determines icon state)
 * @param {() => void} props.onClick - Click handler function
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered hamburger menu button
 * 
 * @features
 * - Animated transformation from hamburger lines to "X"
 * - Smooth CSS transitions
 * - Accessibility support with ARIA attributes
 * - Responsive design
 * - Customizable styling
 * 
 * @accessibility
 * - Dynamic aria-label based on state
 * - ARIA expanded attribute
 * - Keyboard navigation support
 * - Screen reader friendly
 * 
 * @animations
 * - Two horizontal lines transform into "X" shape
 * - Smooth transitions with CSS transforms
 * - Respects user's motion preferences
 * 
 * @states
 * - **Closed**: Two horizontal lines
 * - **Open**: "X" shape formed by rotated lines
 */
export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  isOpen, 
  onClick, 
  className = '' 
}) => {
  // Accessibility labels
  const accessibility = {
    OPEN_LABEL: 'Open menu',
    CLOSE_LABEL: 'Close menu'
  };

  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ''} ${className}`}
      onClick={onClick}
      aria-label={isOpen ? accessibility.CLOSE_LABEL : accessibility.OPEN_LABEL}
      aria-expanded={isOpen}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

