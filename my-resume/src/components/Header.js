import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Maksym Iliev - Resume
                </Typography>
                <Button color="inherit" component={Link} to="/">Головна</Button>
                <Button color="inherit" component={Link} to="/todo">TODO</Button>
                <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
