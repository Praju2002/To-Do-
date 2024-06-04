import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from "../redux/reducers/theme_slice";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function NavBar() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);
    const [checked, setChecked] = React.useState(mode === "dark");

    const handleChange = (event) => {
        setChecked(event.target.checked);
        dispatch(toogleTheme());
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        To-Do
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Switch {...label} color='warning'
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Typography sx={{ ml: 1 }}>{mode === "dark" ? "Dark" : "Light"}</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
