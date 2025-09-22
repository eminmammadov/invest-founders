/**
 * Hero Component Types
 * 
 * Defines the TypeScript interfaces and types for the Hero component.
 */

export interface HeroProps {
  /** Additional CSS classes to apply to the hero container */
  className?: string;
  /** Whether to show the video background */
  showVideo?: boolean;
  /** Custom video source path */
  videoSrc?: string;
}
