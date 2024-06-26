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

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

export interface PostCardProps {
    post: Post;
}

export interface UseFetchProps {
    url?: any;
    options?: RequestInit;
}

export interface UseFetchResponse<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}