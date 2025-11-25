import React from 'react';
import styles from './PageTitle.module.scss';

interface IPageTitleProps {
    children: React.ReactNode;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ children }) => {
    return (
        <span className={styles['page-title']}>
            {children}
        </span>
    );
};

