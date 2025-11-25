import React from 'react';
import styles from './CardText.module.scss';
import cn from 'classnames';

interface ICardTextProps {
    children: React.ReactNode;
    variant?: 'title' | 'value';
    color?: string;
    className?: string;
}

export const CardText: React.FC<ICardTextProps> = ({ 
    children, 
    variant = 'title', 
    color,
    className 
}) => {
    const textClassName = cn(
        styles['card-text'],
        styles[`card-text--${variant}`],
        className
    );

    const style = color ? { color } : undefined;

    return (
        <span className={textClassName} style={style}>
            {children}
        </span>
    );
};

