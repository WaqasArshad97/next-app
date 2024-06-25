export interface children {
    children: React.ReactNode
}

export interface drawerProps {
    drawerOpen: boolean,
    handleDrawerToggle: () => void,
    navItems: string[]
}

export interface headerProps {
    handleDrawerToggle: () => void;
    navItems: string[]
}