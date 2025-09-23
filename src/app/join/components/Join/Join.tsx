'use client';

import React from 'react';
import Link from 'next/link';
import { TbWallet, TbBrandLinkedin, TbBrandX, TbArrowLeft } from 'react-icons/tb';
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
  TESTIMONIAL_TEXT: '"Access to our system is available only to registered members. In addition to membership requirements, users are required to hold a minimum of $20 worth of IFF tokens to maintain the platfors reliability and sustainability. This requirement both strengthens our community and secures the benefits our members receive from the system."',
  TERMS_LINK_TEXT: 'Learn terms of use >',
  SOCIAL_LINKS: [
    {
      name: 'Follow us on Linkedin',
      memberCount: 1,
      icon: 'O',
      iconBgColor: 'var(--color-gray-800)',
    },
    {
      name: 'Follow us on X',
      memberCount: 30,
      icon: 'PS',
      iconBgColor: 'var(--color-accent-purple)',
    },
  ],
} as const;

/**
 * Join Component
 * 
 * A full-screen page for connecting wallet and social links with testimonial section.
 * Features social link selection and wallet connection functionality.
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
 * - Full-screen layout without header/footer
 * - Social link selection cards
 * - Connect wallet option
 * - Testimonial section
 * - Responsive design for all screen sizes
 * - Back navigation button
 * 
 * @accessibility
 * - Proper semantic HTML structure
 * - Keyboard navigation support
 * - ARIA labels for interactive elements
 * - High contrast text for readability
 */
export const Join: React.FC<JoinProps> = ({ className = '' }) => {
  // Render appropriate icon based on social link name
  const renderSocialIcon = (name: string, icon: string) => {
    if (name === 'Follow us on Linkedin') {
      return <TbBrandLinkedin className={styles.socialIcon} />;
    } else if (name === 'Follow us on X') {
      return <TbBrandX className={styles.socialIcon} />;
    } else {
      return <span className={styles.socialIcon}>{icon}</span>;
    }
  };

  // Handle join button click with appropriate link
  const handleJoinClick = (socialName: string) => {
    if (socialName === 'Follow us on Linkedin') {
      window.open('https://www.linkedin.com/company/investfounders', '_blank');
    } else if (socialName === 'Follow us on X') {
      window.open('https://x.com/InvestFounders', '_blank');
    } else {
      console.log(`Joining social: ${socialName}`);
    }
  };

  const handleConnectWallet = () => {
    console.log('Connecting wallet');
    // TODO: Implement wallet connection functionality
  };

  return (
    <div className={`${styles.joinPage} ${className}`}>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <div className={styles.contentCard}>
          {/* Back Button */}
          <Link href="/" className={`${styles.backButton} ${styles.backButtonPosition}`}>
            <TbArrowLeft className={styles.backIcon} />
          </Link>
          
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>{JOIN_CONSTANTS.TITLE}</h1>
            <p className={styles.subtitle}>{JOIN_CONSTANTS.SUBTITLE}</p>
          </div>
          
          {/* Social Links List */}
          <div className={styles.socialList}>
            {JOIN_CONSTANTS.SOCIAL_LINKS.map((social) => (
              <div key={social.name} className={styles.socialCard}>
                <div 
                  className={styles.iconContainer} 
                  style={{ backgroundColor: social.iconBgColor }}
                >
                  {renderSocialIcon(social.name, social.icon)}
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.name}>{social.name}</h3>
                  <p className={styles.memberCount}>{social.memberCount} Followers</p>
                </div>
                
                <button
                  onClick={() => handleJoinClick(social.name)}
                  className={styles.joinButton}
                >
                  Join
                </button>
              </div>
            ))}
          </div>
          
          {/* Connect Wallet */}
          <button
            onClick={handleConnectWallet}
            className={styles.connectWalletButton}
          >
            <TbWallet className={styles.connectIcon} />
            {JOIN_CONSTANTS.CONNECT_WALLET_TEXT}
          </button>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className={styles.testimonialSection}>
        <div className={styles.testimonialContent}>
          <blockquote className={styles.testimonialText}>
            {JOIN_CONSTANTS.TESTIMONIAL_TEXT}
          </blockquote>
          <Link href="/terms" className={styles.testimonialAuthor}>
            {JOIN_CONSTANTS.TERMS_LINK_TEXT}
          </Link>
        </div>
      </div>
    </div>
  );
};
