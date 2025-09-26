import { 
  CoinbaseWalletAdapter,
  TrustWalletAdapter
} from '@solana/wallet-adapter-wallets';

// Supported wallets for Jupiter integration
// Phantom and Solflare are automatically detected as Standard Wallets
// so we don't need to include them manually
export const supportedWallets = [
  new CoinbaseWalletAdapter(),
  new TrustWalletAdapter()
];

// Wallet names for precedence configuration
export const walletNames = [
  'Phantom',
  'Solflare', 
  'Coinbase Wallet',
  'Trust Wallet'
] as const;

export type SupportedWalletName = typeof walletNames[number];
