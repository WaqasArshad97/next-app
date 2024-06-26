export interface LayoutProps {
    children: React.ReactNode
}

export interface DrawerProps {
    drawerOpen?: boolean,
    handleDrawerToggle?: () => void,
    navItems?: string[]
}

export interface HeaderProps {
    handleDrawerToggle: () => void;
}