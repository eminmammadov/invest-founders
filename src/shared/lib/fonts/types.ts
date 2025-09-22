// Font weight types for Gellix font family
export type GellixWeight = 
  | 'thin'        // 100
  | 'light'       // 300
  | 'regular'     // 400
  | 'medium'      // 500
  | 'semibold'    // 600
  | 'bold'        // 700
  | 'extrabold'   // 800
  | 'black'       // 900;

// Font style types
export type GellixStyle = 'normal' | 'italic';

// Font format types
export type FontFormat = 'woff2' | 'woff';

// Font configuration interface
export interface GellixFontConfig {
  weight: GellixWeight;
  style: GellixStyle;
  format: FontFormat;
}

// Font family configuration
export interface FontFamilyConfig {
  name: string;
  fallback: string[];
  weights: GellixWeight[];
  styles: GellixStyle[];
}

// Font loading configuration
export interface FontLoadingConfig {
  preload: boolean;
  display: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  timeout: number;
}

// CSS font family type
export type CSSFontFamily = string;

// Font weight numeric values
export const GELLIX_WEIGHTS = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// Font weight names for CSS
export const GELLIX_WEIGHT_NAMES = {
  thin: 'Thin',
  light: 'Light',
  regular: 'Regular',
  medium: 'Medium',
  semibold: 'SemiBold',
  bold: 'Bold',
  extrabold: 'ExtraBold',
  black: 'Black',
} as const;
