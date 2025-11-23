import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Logo } from "@/widgets/Logo/Logo";
import { Navbar } from "@/widgets/Navbar";
import { AppBar } from "@mui/material";
import { Box, Toolbar } from "@mui/material";

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
                <Box sx={{ marginLeft: 'auto' }}>
                    <LangSwitcher label={'Язык'} icon={'/assets/icons/locale.svg'} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
