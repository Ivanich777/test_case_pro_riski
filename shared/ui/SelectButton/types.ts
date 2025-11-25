export interface ISelectButtonProps {
    label: string;
    options: Array<{ value: string; label: string }>;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

