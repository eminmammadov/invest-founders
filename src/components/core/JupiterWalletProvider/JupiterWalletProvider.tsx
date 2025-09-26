'use client';

import React from 'react';
import { UnifiedWalletProvider } from '@jup-ag/wallet-adapter';
import { getJupiterConfig, supportedWallets } from '@/shared/lib/jupiter';

interface JupiterWalletProviderProps {
  children: React.ReactNode;
}

export const JupiterWalletProvider: React.FC<JupiterWalletProviderProps> = ({ 
  children 
}) => {
  const config = getJupiterConfig();

  return (
    <UnifiedWalletProvider
      wallets={supportedWallets}
      config={config}
      localStorageKey="invest-founders-wallet"
    >
      {children}
    </UnifiedWalletProvider>
  );
};
