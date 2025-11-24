import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Logo } from "@/shared/ui/Logo";
import { Navbar } from "@/widgets/Navbar";
import { AppBar, Toolbar, Box } from "@mui/material";
import { QRButton } from "./components/QRButton";
import { UserAvatar } from "./components/Avatar";

export const Header = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid #e0e0e0',
                borderColor: 'divider'
            }}>
            <Toolbar>
                <Logo />
                <Navbar />
                <Box sx={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    height: '100%'
                }}>
                    <LangSwitcher icon={'/assets/icons/locale.svg'} />
                    <QRButton />
                    <UserAvatar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
