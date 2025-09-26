'use client';

import React from 'react';
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
