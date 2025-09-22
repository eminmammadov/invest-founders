import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';
import { LogoProps } from './types';

/**
 * Logo Component
 * 
 * A responsive logo component that displays the Kriptaz Invest logo with support for different variants and sizes.
 * Features automatic image optimization and accessibility support.
 * 
 * @component
 * @example
 * ```tsx
 * // White logo (default)
 * <Logo variant="white" size="medium" />
 * 
 * // Black logo
 * <Logo variant="black" size="large" />
 * 
 * // Small logo
 * <Logo variant="white" size="small" />
 * ```
 * 
 * @param {LogoProps} props - The component props
 * @param {'white' | 'black'} [props.variant='white'] - Logo color variant
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Logo size
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered logo component
 * 
 * @features
 * - Multiple color variants: white, black
 * - Three sizes: small, medium, large
 * - Automatic image optimization with Next.js Image
 * - Link to home page
 * - Accessibility support with alt text
 * - Responsive design
 * 
 * @accessibility
 * - Proper alt text for screen readers
 * - Semantic link element
 * - Focus management
 * 
 * @variants
 * - **white**: White logo for dark backgrounds
 * - **black**: Black logo for light backgrounds
 * 
 * @sizes
 * - **small**: 120x30px - Compact size for headers
 * - **medium**: 160x40px - Standard size
 * - **large**: 200x50px - Prominent size for hero sections
 */
export const Logo: React.FC<LogoProps> = ({ 
  variant = 'white', 
  size = 'medium', 
  className = '' 
}) => {
  // Logo paths
  const logoPaths = {
    WHITE: '/images/logos/kriptaz-invest-full-white-logo.svg',
    BLACK: '/images/logos/kriptaz-invest-full-black-logo.svg'
  };

  // Alt text
  const altText = 'Invest Founders Logo';

  // Logo dimensions
  const dimensions = {
    small: { width: 120, height: 30 },
    medium: { width: 160, height: 40 },
    large: { width: 200, height: 50 }
  };

  // Default settings
  const defaults = {
    PRIORITY: true
  };

  const logoSrc = variant === 'white' 
    ? logoPaths.WHITE
    : logoPaths.BLACK;

  return (
    <Link href="/" className={`${styles.logo} ${styles[size]} ${className}`}>
      <Image
        src={logoSrc}
        alt={altText}
        width={dimensions[size].width}
        height={dimensions[size].height}
        priority={defaults.PRIORITY}
        className={styles.image}
        sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 200px"
      />
    </Link>
  );
};

