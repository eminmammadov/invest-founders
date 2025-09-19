// MobileMenuNavigation Component Types

export interface MobileNavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: MobileNavItem[];
}

export interface MobileMenuNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: MobileNavItem[];
  className?: string;
}
