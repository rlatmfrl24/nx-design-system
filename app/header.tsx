import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export const Header = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{ backgroundColor: 'indigo.900' }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" color="white" gap={1}>
                <IconButton size="small" color="inherit">
                    <Menu fontSize="small" color="inherit" />
                </IconButton>
                <Typography variant="subtitle1">
                    Components Overview
                </Typography>
            </Box>
        </Box>
    );
};