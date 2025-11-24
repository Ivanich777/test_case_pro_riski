export interface MenuItem {
    label: string;
    onClick: () => void;
}

export interface IMenuButtonProps {
    label: string;
    icon: string;
    menuItems: MenuItem[];
}
