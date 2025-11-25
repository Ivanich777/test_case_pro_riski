import React from 'react';
import styles from './AdditionalInfo.module.scss';
import { IAdditionalInfoProps } from './types';

export const AdditionalInfo: React.FC<IAdditionalInfoProps> = ({ children }) => {
    return (
        <span className={styles['additional-info']}>
            {children}
        </span>
    );
};

