// Navigation Component Types

export interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
}
