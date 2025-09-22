import { 
  GellixWeight, 
  GellixStyle, 
  FontFormat, 
  FontFamilyConfig, 
  FontLoadingConfig,
  GELLIX_WEIGHTS,
  GELLIX_WEIGHT_NAMES 
} from './types';

// Gellix font family configuration
export const gellixConfig: FontFamilyConfig = {
  name: 'Gellix',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  weights: ['thin', 'light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
  styles: ['normal', 'italic']
};

// Font loading configuration
export const fontLoadingConfig: FontLoadingConfig = {
  preload: true,
  display: 'swap',
  timeout: 3000
};

// Font file path generator
export const getFontPath = (weight: GellixWeight, style: GellixStyle, format: FontFormat): string => {
  const weightName = GELLIX_WEIGHT_NAMES[weight];
  const styleSuffix = style === 'italic' ? 'Italic' : '';
  const fileName = `Gellix-${weightName}${styleSuffix}`;
  
  return `/fonts/gellix/${fileName}.${format}`;
};

// Generate font family CSS value
export const getFontFamily = (): string => {
  return `"${gellixConfig.name}", ${gellixConfig.fallback.join(', ')}`;
};

// Generate CSS custom property for font family
export const getFontFamilyCSS = (): string => {
  return `--font-gellix: ${getFontFamily()};`;
};

// Font weight to numeric value mapping
export const getFontWeight = (weight: GellixWeight): number => {
  return GELLIX_WEIGHTS[weight];
};

// Generate all font paths for preloading
export const getPreloadFonts = (): Array<{ href: string; as: string; type: string }> => {
  const preloadFonts: Array<{ href: string; as: string; type: string }> = [];
  
  // Preload critical fonts only (regular, medium, bold)
  const criticalWeights: GellixWeight[] = ['regular', 'medium', 'bold'];
  
  criticalWeights.forEach(weight => {
    // Normal style
    preloadFonts.push({
      href: getFontPath(weight, 'normal', 'woff2'),
      as: 'font',
      type: 'font/woff2'
    });
    
    // Italic style
    preloadFonts.push({
      href: getFontPath(weight, 'italic', 'woff2'),
      as: 'font',
      type: 'font/woff2'
    });
  });
  
  return preloadFonts;
};

// Generate font-face CSS for all weights and styles
export const generateFontFaceCSS = (): string => {
  let css = '';
  
  gellixConfig.weights.forEach(weight => {
    gellixConfig.styles.forEach(style => {
      const weightName = GELLIX_WEIGHT_NAMES[weight];
      const styleSuffix = style === 'italic' ? 'Italic' : '';
      const fontName = `Gellix-${weightName}${styleSuffix}`;
      const fontWeight = GELLIX_WEIGHTS[weight];
      const fontStyle = style === 'italic' ? 'italic' : 'normal';
      
      css += `
@font-face {
  font-family: '${gellixConfig.name}';
  font-style: ${fontStyle};
  font-weight: ${fontWeight};
  font-display: ${fontLoadingConfig.display};
  src: url('/fonts/gellix/${fontName}.woff2') format('woff2'),
       url('/fonts/gellix/${fontName}.woff') format('woff');
}
`;
    });
  });
  
  return css;
};

// Export font configuration for easy access
export const fontConfig = {
  family: gellixConfig,
  loading: fontLoadingConfig,
  getPath: getFontPath,
  getFamily: getFontFamily,
  getFamilyCSS: getFontFamilyCSS,
  getWeight: getFontWeight,
  getPreloadFonts,
  generateFontFaceCSS
};
