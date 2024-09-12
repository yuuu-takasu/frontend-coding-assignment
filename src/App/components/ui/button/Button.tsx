import React, { HTMLAttributeAnchorTarget, useState } from 'react';
import './Button.css';

/** ボタンのパターン */
type ButtonVariant = 'black' | 'outlined' | 'white';

/** ボタンのType */
type ButtonType = "submit" | "reset" | "button";

/**
 * ButtonProps interface
 */
interface ButtonProps {
    label: string;
    onClick?: () => Promise<void>;
    variant: ButtonVariant;
    disabled?: boolean;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    type?: ButtonType;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    width?: number;
    height?: number;
}

/**
 * Button Component
 * @param param0 ButtonProps
 * @returns Dom
 */
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'outlined',
    disabled = false,
    loading = false,
    iconLeft,
    iconRight,
    type = 'button',
    href,
    target = '_self',
    width = 150,
    height = 50,
}) => {
    /** ボタンがロード中かのuseState */
    const [isLoading, setIsLoading] = useState(loading);

    /** ボタンのstyle */
    const style = { width: width + 'px', height: height + 'px' };

    const className = `button ${variant} ${disabled || isLoading ? 'disabled' : ''}`;

    /**
     * クリック時実行関数を非同期で実行
     */
    const handleClick = async () => {
        if (!disabled && onClick) {
            setIsLoading(true);
            try {
                await onClick();
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (href !== undefined) {
        return (
            <a
                href={href}
                target={target}
                rel="noopener noreferrer"
                className={className}
                style={style}
            >
                {iconLeft && <span className="icon left">{iconLeft}</span>}
                {label}
                {iconRight && <span className="icon right">{iconRight}</span>}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            className={className}
            disabled={disabled || isLoading}
            style={style}
        >
            {isLoading && <span className="spinner"></span>}
            {!isLoading && iconLeft && <span className="icon-left">{iconLeft}</span>}
            <span>{isLoading ? 'Loading...' : label}</span>
            {isLoading}
            {!isLoading && iconRight && <span className="icon-left">{iconRight}</span>}
        </button>
    );
};

export default Button;
