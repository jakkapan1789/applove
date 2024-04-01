export interface ConfirmOption {
    title: string;
    text?: string;
    type?: string
    confirmButtonLabel?: string;
    cancelButtonLabel?: string;
    fontFamily?: string;
    showIcon: boolean;
    iconColor: string;
    iconCustom: {
        width?: string;
        height?: string;
    }
}

export interface GeneralOption {
    title: string;
    text?: string;
    exitButtonLabel?: string;
    fontFamily?: string;
    showIcon: boolean;
    iconColor: string;
    iconCustom: {
        width?: string;
        height?: string;
    }
}