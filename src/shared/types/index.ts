/**
 * TypeScript Type Definitions
 * 
 * Global type definitions for the application.
 * Organized by domain: common, components, API, business logic.
 */

// Common Types
export type Status = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type Theme = 'light' | 'dark' | 'system';
export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

// API Types (Future)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Business Logic Types
export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  iconPath: string;
}

export interface Portfolio {
  id: string;
  name: string;
  totalValue: number;
  assets: CryptoAsset[];
  createdAt: Date;
  updatedAt: Date;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export interface FormData {
  [key: string]: string | number | boolean;
}
