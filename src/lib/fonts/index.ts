// Export all font-related functionality
export * from './types';
export * from './gellix';

// Re-export commonly used items for convenience
export { 
  gellixConfig as fontConfig,
  fontConfig as gellix,
  getFontFamily,
  getFontFamilyCSS,
  getFontWeight,
  getPreloadFonts,
  generateFontFaceCSS
} from './gellix';

// Export types for external use
export type {
  GellixWeight,
  GellixStyle,
  FontFormat,
  FontFamilyConfig,
  FontLoadingConfig
} from './types';
