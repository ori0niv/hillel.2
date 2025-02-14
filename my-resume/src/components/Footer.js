import React from "react";
import { Container, Typography, Link } from "@mui/material";

function Footer() {
    return (
        <Container
            component="footer"
            sx={{
                marginTop: 4,
                padding: 2,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderTop: "1px solid #ddd",
            }}
        >
            <Typography variant="body1">© 2025 Maksym Iliev</Typography>
            <Typography variant="body2">
                <Link href="mailto:maksim.iliev@icloud.com" color="primary">
                    Email: maksim.iliev@icloud.com
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link href="https://t.me/maksymFE" color="primary" target="_blank">
                    Telegram: @maksymFE
                </Link>
            </Typography>
        </Container>
    );
}


export default Footer;
