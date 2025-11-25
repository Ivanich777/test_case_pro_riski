import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Logo } from "@/shared/ui/Logo";
import { Navbar } from "@/widgets/Navbar";
import { AppBar, Toolbar, Box } from "@mui/material";
import { QRButton } from "./components/QRButton/QRButton";
import { UserAvatar } from "./components/UserAvatar/UserAvatar";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid #e0e0e0',
            }}
            className={styles['header']}
        >
            <Toolbar className={styles['header__toolbar']}>
                <Logo />
                <Navbar className={styles['header__navbar--desktop']} />
                <Box className={styles['header__actions']}>
                    <Box className={styles['header__lang-switcher--desktop']}>
                    <LangSwitcher icon={'/assets/icons/locale.svg'} />
                    </Box>
                    <QRButton />
                    <UserAvatar />
                    <MobileMenu />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
