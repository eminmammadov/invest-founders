'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { HeroProps } from './types';
import { Button } from '../../core/Button';

/**
 * Hero Component Constants
 * 
 * Centralized text content for the Hero component.
 * All text content is managed here for easy maintenance and localization.
 */
const HERO_CONSTANTS = {
  TITLE: 'Crypto investment and asset management fund',
  DESCRIPTION: 'Founded with distinguished investors, our regulated fund platform applies disciplined DDGO principles to allocate weekly savings into crypto assets, ensuring transparent, reliable, and sustainable growth.',
  BUTTON_TEXT: 'Crypto Portfolio',
  LINK_TEXT: 'Read about us',
  VIDEO_SRC: '/videos/hero-video.mp4',
} as const;

/**
 * Hero Component
 * 
 * A full-screen hero section with video background and compelling text content.
 * Features responsive design and professional styling for the Invest Founders platform.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Hero />
 * 
 * // With custom video
 * <Hero 
 *   videoSrc="/custom-video.mp4"
 *   className="custom-hero"
 * />
 * 
 * // Without video background
 * <Hero showVideo={false} />
 * ```
 * 
 * @param {HeroProps} props - The component props
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @param {boolean} [props.showVideo=true] - Whether to show the video background
 * @param {string} [props.videoSrc='/videos/hero-video.mp4'] - Custom video source path
 * @returns {JSX.Element} The rendered hero component
 * 
 * @features
 * - Full-screen video background with gradient overlay
 * - Responsive typography scaling
 * - Professional gradient background fallback
 * - Optimized for desktop, tablet, and mobile
 * - Accessibility-friendly video implementation
 * - Centralized text content management
 * 
 * @accessibility
 * - Video is muted by default for accessibility
 * - Proper semantic HTML structure
 * - High contrast text for readability
 * - Responsive design for all screen sizes
 */
export const Hero: React.FC<HeroProps> = ({
  className = '',
  showVideo = true,
  videoSrc = HERO_CONSTANTS.VIDEO_SRC,
}) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      {/* Video Background */}
      {showVideo && (
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback message for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      {showVideo && (
        <div className={styles.heroOverlay} aria-hidden="true" />
      )}

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          {/* Main Title */}
          <h1 className={styles.heroTitle}>
            {HERO_CONSTANTS.TITLE}
          </h1>
        </div>
      </div>

      {/* Description - Outside Hero */}
      <p className={styles.heroDescription}>
        {HERO_CONSTANTS.DESCRIPTION}
      </p>

      {/* Action Buttons */}
      <div className={styles.heroActions}>
        <Link href="/portfolio">
          <Button 
            variant="primary" 
            size="medium"
            className={styles.heroButton}
          >
            {HERO_CONSTANTS.BUTTON_TEXT}
          </Button>
        </Link>
        <a 
          href="/about" 
          className={styles.heroLink}
        >
          {HERO_CONSTANTS.LINK_TEXT}
        </a>
      </div>
    </section>
  );
};
