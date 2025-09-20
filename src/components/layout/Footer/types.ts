/**
 * Footer Component Types
 * 
 * Type definitions for the Footer component that displays
 * copyright information, navigation links, and social media links.
 */

export interface FooterLink {
  /** Display text for the link */
  label: string;
  /** URL path for the link */
  href: string;
  /** Whether to open in new tab */
  target?: '_blank' | '_self';
}

export interface FooterProps {
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether the footer should be sticky to bottom */
  sticky?: boolean;
}
