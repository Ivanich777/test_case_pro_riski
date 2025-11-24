import Image from 'next/image';

interface IconProps {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    className?: string;
}

export const Icon = ({
    src,
    width = 20,
    height = 20,
    alt = 'Icon',
    className
}: IconProps) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
        />
    );
};

