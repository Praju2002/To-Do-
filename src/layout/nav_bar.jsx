import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        To-Do
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Switch {...label} defaultChecked color='secondary.main' />
                        <Typography>light</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
