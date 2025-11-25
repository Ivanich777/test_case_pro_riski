import React from 'react';
import { Link } from '@/i18n/routing';
import { AppRoutes } from '@/shared/lib/routes';
import { Icon } from '@/shared/ui/Icon';

export const Logo: React.FC = () => {
    return (
        <Link href={AppRoutes.HOME}>
            <Icon
                src="/assets/icons/logo.svg"
                width={40}
                height={40}
                alt="Logo"
            />
        </Link>
    );
};
