'use client';

import React, { useEffect } from 'react';
import { UnifiedWalletButton } from '@jup-ag/wallet-adapter';
import { useUnifiedWallet } from '@jup-ag/wallet-adapter';
import styles from './JupiterConnectButton.module.css';

interface JupiterConnectButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const JupiterConnectButton: React.FC<JupiterConnectButtonProps> = ({ 
  className,
  children 
}) => {
  const { connected, connecting, wallet } = useUnifiedWallet();

  // Mobile wallet detection enhancement
  useEffect(() => {
    const handleMobileWalletDetection = () => {
      // Check if we're on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Force wallet detection on mobile
        const event = new CustomEvent('jupiter-mobile-wallet-detect');
        window.dispatchEvent(event);
      }
    };

    // Run on mount and when window becomes visible
    handleMobileWalletDetection();
    window.addEventListener('focus', handleMobileWalletDetection);
    
    return () => {
      window.removeEventListener('focus', handleMobileWalletDetection);
    };
  }, []);

  const getButtonText = () => {
    if (connecting) return 'Connecting...';
    if (connected && wallet) return `Connected: ${wallet.adapter.name}`;
    return children || 'Connect Wallet';
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <UnifiedWalletButton
        buttonClassName={styles.jupiterButton}
        currentUserClassName={styles.currentUser}
        overrideContent={
          <button className={styles.customButton}>
            {getButtonText()}
          </button>
        }
      />
    </div>
  );
};