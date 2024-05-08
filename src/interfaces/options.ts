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
export interface LoveOption {
    title: string;
    text?: string;
    type?: string;
    confirmButtonLabel?: string;
    cancelButtonLabel?: string;
    fontFamily?: string;
    showIcon: boolean;
    iconColor: string;
    iconCustom: {
        width?: string;
        height?: string;
    };
    cardRadius: number;
    validationRules?: string[]; // Validation rules for user input
    isRequired?: boolean; // Whether the option is required
    validationErrorMessage?: string; // Error message to display on validation failure
    onClick?: () => void; // Event handler for option click
    iconType?: string; // Type of icon (e.g., "heart", "star", etc.)
    iconSize?: string; // Size of the icon
    iconPosition?: 'left' | 'right'; // Position of the icon relative to text
    backgroundColor?: string; // Background color of the option
    textColor?: string; // Text color of the option
    borderColor?: string; // Border color of the option
    locale?: string; // Locale for localization
    translations?: Record<string, string>; // Translations for different languages
    languageCode?: string; // Code representing the language (e.g., "en", "fr")
    ariaLabel?: string; // Aria label for accessibility
    tabIndex?: number; // Tab index for keyboard navigation
    error?: boolean; // Indicates if there's an error with the option
    errorMessage?: string; // Error message to display
    errorColor?: string; // Color to indicate error state
    customStyles?: Record<string, string>; // Custom styles for the option
    customClasses?: string[]; // Custom CSS classes for the option
    animationType?: string; // Type of animation (e.g., "fade", "slide", etc.)
    animationDuration?: number; // Duration of the animation
    animationEasing?: string; // Easing function for the animation
    description?: string; // Description of the option
    usageExamples?: string[]; // Examples demonstrating how to use the option
    notes?: string; // Additional notes or comments
}
