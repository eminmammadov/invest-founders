// Navigation Component Types

export interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export interface NavigationProps {
  variant?: 'desktop' | 'mobile';
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}
