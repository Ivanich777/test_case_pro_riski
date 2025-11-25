import React from 'react';
import Image from 'next/image';
import { IIconProps } from './types';

export const Icon: React.FC<IIconProps> = ({ src, width = 20, height = 20, alt = 'Icon', className }) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
        />
    );
}
