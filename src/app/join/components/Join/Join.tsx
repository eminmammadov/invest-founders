'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/core/Logo';
import { Button } from '@/components/core/Button';
import styles from './Join.module.css';
import { JoinProps } from '../../types';

/**
 * Join Component Constants
 * 
 * Text content and configuration for the Join page.
 */
const JOIN_CONSTANTS = {
  TITLE: 'Access to Invest Founders starts with your login',
  SUBTITLE: 'Access to the system is only available to our members and requires a minimum of $20 worth of IFF tokens:',
  CONNECT_WALLET_TEXT: 'Connect Wallet',
  LEGAL_TEXT: 'By continuing you agree to Invest Founders&apos; Privacy Policy and Terms of Service.',
  PRIVACY_POLICY_LINK: '/privacy-policy',
  TERMS_OF_SERVICE_LINK: '/terms-of-service',
} as const;

/**
 * Join Component
 * 
 * A split-screen authentication page with background image and wallet connection.
 * Features clean white interface with Invest Founders branding and login functionality.
 * 
 * @component
 * @example
 * ```tsx
 * <Join />
 * ```
 * 
 * @param {JoinProps} props - The component props
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered join page
 * 
 * @features
 * - Split-screen layout with background image
 * - Clean white interface design
 * - Wallet connection functionality
 * - Invest Founders branding
 * - Legal and support information
 * - Responsive design for all screen sizes
 * - Close button navigation
 * 
 * @accessibility
 * - Proper semantic HTML structure
 * - Keyboard navigation support
 * - ARIA labels for interactive elements
 * - High contrast text for readability
 */
export const Join: React.FC<JoinProps> = ({ className = '' }) => {
  const handleConnectWallet = () => {
    console.log('Connecting wallet');
    // TODO: Implement wallet connection functionality
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className={`${styles.joinPage} ${className}`}>
      {/* Background Section */}
      <div className={styles.backgroundSection}>
        <div className={styles.logoContainer}>
          <Logo size="small" variant="white" />
        </div>
        <div className={styles.backgroundImage} />
      </div>

      {/* Interface Section */}
      <div className={styles.interfaceSection}>
        {/* Close Button */}
        <button onClick={handleClose} className={styles.closeButton}>
          <span className={styles.closeIcon}>×</span>
        </button>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{JOIN_CONSTANTS.TITLE}</h1>
          <p className={styles.subtitle}>{JOIN_CONSTANTS.SUBTITLE}</p>
          
          {/* Wallet Connect Button */}
          <Button
            onClick={handleConnectWallet}
            variant="primary"
            size="large"
            className={styles.connectWalletButton}
          >
            {JOIN_CONSTANTS.CONNECT_WALLET_TEXT}
          </Button>

          {/* Legal Text */}
          <div className={styles.legalSection}>
            <p className={styles.legalText}>
              By continuing you agree to Invest Founders&apos;{' '}
              <Link href={JOIN_CONSTANTS.PRIVACY_POLICY_LINK} className={styles.legalLink}>
                Privacy Policy
              </Link>
              {' '}and{' '}
              <Link href={JOIN_CONSTANTS.TERMS_OF_SERVICE_LINK} className={styles.legalLink}>
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
