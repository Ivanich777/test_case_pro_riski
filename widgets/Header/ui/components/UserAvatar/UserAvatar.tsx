import { Avatar, Badge } from "@mui/material";
import styles from './UserAvatar.module.scss';

export const UserAvatar = () => {
    return (
        <Badge
            badgeContent={30}
            color="primary"
            overlap="circular"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <Avatar className={styles['user-avatar']}>
                U
            </Avatar>
        </Badge>

    );
};
