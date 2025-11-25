import React from 'react';
import styles from './AdditionalInfo.module.scss';

interface IAdditionalInfoProps {
    children: React.ReactNode;
}

export const AdditionalInfo: React.FC<IAdditionalInfoProps> = ({ children }) => {
    return (
        <span className={styles['additional-info']}>
            {children}
        </span>
    );
};

