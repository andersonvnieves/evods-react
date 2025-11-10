import type {ButtonProps} from "./Button.props.ts";

const baseStyles = 'font-semibold rounded focus:outline-none transition-colors duration-300';

const variantStyles: Record<string, string> = {
    primary: 'bg-primary-400 text-primary-800 hover:bg-primary-500 hover:text-primary-900 disabled:bg-gray-200 focus:bg-primary-100 focus:text-primary-900',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300',
};

const sizeStyles: Record<string, string> = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
};

export function Button({
                           variant = 'primary',
                           size = 'medium',
                           fullWidth = false,
                           loading = false,
                           disabled,
                           className = '',
                           children,
                           ...props
                       }: ButtonProps) {
    return (
        <button
            type="button"
            disabled={disabled || loading}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
                fullWidth ? 'w-full' : ''
            } ${loading ? 'cursor-wait opacity-70' : ''} ${className}`}
            {...props}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
}
