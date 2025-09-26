import { 
  CoinbaseWalletAdapter,
  TrustWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from '@solana/wallet-adapter-wallets';

// Supported wallets for Jupiter integration
// Include all wallets for better mobile compatibility
export const supportedWallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
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
