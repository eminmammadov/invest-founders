import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './types';

/**
 * Button Component
 * 
 * A versatile button component with multiple variants, sizes, and states.
 * Features loading states, accessibility support, and smooth animations.
 * 
 * @component
 * @example
 * ```tsx
 * // Primary button
 * <Button variant="primary" size="medium" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * // Loading button
 * <Button variant="secondary" loading={true}>
 *   Loading...
 * </Button>
 * 
 * // Disabled button
 * <Button variant="outline" disabled={true}>
 *   Disabled
 * </Button>
 * ```
 * 
 * @param {ButtonProps} props - The component props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} [props.variant='primary'] - Button style variant
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Button size
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {boolean} [props.loading=false] - Whether the button is in loading state
 * @param {() => void} [props.onClick] - Click handler function
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Button type
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} The rendered button component
 * 
 * @features
 * - Multiple variants: primary, secondary, outline, ghost
 * - Three sizes: small, medium, large
 * - Loading state with spinner animation
 * - Disabled state handling
 * - Accessibility support
 * - Smooth hover and focus animations
 * 
 * @accessibility
 * - Proper button semantics
 * - Loading state indication
 * - Disabled state handling
 * - Focus management
 * 
 * @variants
 * - **primary**: Main action button with solid background
 * - **secondary**: Secondary action with outlined style
 * - **outline**: Outlined button with transparent background
 * - **ghost**: Minimal button with hover effects only
 * 
 * @sizes
 * - **small**: Compact button for tight spaces
 * - **medium**: Standard button size
 * - **large**: Prominent button for primary actions
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  // Accessibility labels
  const accessibility = {
    SPINNER_ARIA_HIDDEN_VALUE: true
  };

  // Loading spinner configuration
  const spinner = {
    VIEW_BOX: '0 0 24 24',
    CIRCLE_CX: '12',
    CIRCLE_CY: '12',
    CIRCLE_R: '10',
    STROKE_WIDTH: '2',
    STROKE_DASHARRAY: '60',
    STROKE_DASHOFFSET: '60'
  };

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden={accessibility.SPINNER_ARIA_HIDDEN_VALUE}>
          <svg className={styles.spinnerIcon} viewBox={spinner.VIEW_BOX}>
            <circle
              className={styles.spinnerCircle}
              cx={spinner.CIRCLE_CX}
              cy={spinner.CIRCLE_CY}
              r={spinner.CIRCLE_R}
              fill="none"
              stroke="currentColor"
              strokeWidth={spinner.STROKE_WIDTH}
              strokeLinecap="round"
              strokeDasharray={spinner.STROKE_DASHARRAY}
              strokeDashoffset={spinner.STROKE_DASHOFFSET}
            />
          </svg>
        </span>
      )}
      <span className={loading ? styles.loadingText : ''}>{children}</span>
    </button>
  );
};

