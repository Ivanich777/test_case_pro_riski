import {  Avatar, Badge} from "@mui/material";

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
            <Avatar
                sx={{
                    width: 40,
                    height: 40,
                    cursor: 'pointer'
                }}
            >
                U
            </Avatar>
        </Badge>

    );
};
