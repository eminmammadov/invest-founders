import { Cluster } from '@solana/web3.js';
import { IUnifiedWalletConfig } from '@jup-ag/wallet-adapter/dist/types/contexts/WalletConnectionProvider';
import { WalletName } from '@solana/wallet-adapter-base';

// Jupiter Wallet Configuration
export const jupiterWalletConfig: IUnifiedWalletConfig = {
  autoConnect: false,
  env: 'mainnet-beta' as Cluster,
  metadata: {
    name: 'Invest Founders',
    url: 'https://investfounders.com',
    description: 'Invest Founders - Professional Investment Platform',
    iconUrls: ['/images/logos/kriptaz-invest-icon-black-logo.svg'],
    additionalInfo: 'Connect your wallet to access Invest Founders platform'
  },
  walletPrecedence: [
    'Phantom' as WalletName,
    'Solflare' as WalletName,
    'Coinbase Wallet' as WalletName,
    'Trust Wallet' as WalletName
  ],
  notificationCallback: {
    onConnect: (props: { walletName: string }) => {
      console.log('Wallet connected:', props.walletName);
    },
    onConnecting: (props: { walletName: string }) => {
      console.log('Connecting to wallet:', props.walletName);
    },
    onDisconnect: (props: { walletName: string }) => {
      console.log('Wallet disconnected:', props.walletName);
    },
    onNotInstalled: (props: { walletName: string }) => {
      console.log('Wallet not installed:', props.walletName);
    }
  },
  walletlistExplanation: {
    href: 'https://docs.solana.com/wallet-guide'
  },
  // theme: {
  //   colors: {
  //     primary: '#000000',
  //     secondary: '#FFD700',
  //     background: '#FFFFFF',
  //     surface: '#F5F5F5',
  //     text: '#000000',
  //     textSecondary: '#666666',
  //     border: '#E0E0E0',
  //     error: '#FF4444',
  //     success: '#00AA00',
  //     warning: '#FF8800'
  //   }
  // },
  lang: 'en'
};

// Development configuration
export const jupiterWalletConfigDev: IUnifiedWalletConfig = {
  ...jupiterWalletConfig,
  env: 'devnet' as Cluster,
  autoConnect: false
};

// Get configuration based on environment
export const getJupiterConfig = (): IUnifiedWalletConfig => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? jupiterWalletConfigDev : jupiterWalletConfig;
};
