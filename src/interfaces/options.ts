export interface ConfirmOption {
    title: string;
    text?: string;
    type?: string
    confirmButtonLabel?: string;
    cancelButtonLabel?: string;
    showIcon: boolean;
    iconCustom: {
        width?: string;
        height?: string;
    }
}

export interface GeneralOption {
    title: string;
    text?: string;
    ExitButtonLabel?: string;
    showIcon: boolean;
    iconCustom: {
        width?: string;
        height?: string;
    }
}