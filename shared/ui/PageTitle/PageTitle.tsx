import React from 'react';
import styles from './PageTitle.module.scss';
import { IPageTitleProps } from './types';

export const PageTitle: React.FC<IPageTitleProps> = ({ children }) => {
    return (
        <span className={styles['page-title']}>
            {children}
        </span>
    );
};

