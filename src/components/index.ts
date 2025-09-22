/**
 * Components Export
 * 
 * Central export file for all components organized by category:
 * - Layout: Header, Navigation, Footer
 * - Core: Button, Logo, HamburgerMenu (fundamental UI components)
 * - Features: Hero (feature-specific components)
 * - Shared: Shared components across features
 */

// Layout Components
export { Header, Navigation, Footer } from './layout';

// Core Components (Fundamental UI building blocks)
export { Button, Logo, HamburgerMenu } from './core';

// Feature Components (Business logic components)
export { Hero } from './features';

// Shared Components (Cross-feature components)
export * from './shared';

// Types Export
export type { HeaderProps, NavigationProps, NavItem, FooterProps, FooterLink } from './layout';
export type { ButtonProps, LogoProps, HamburgerMenuProps } from './core';
export type { HeroProps } from './features';
