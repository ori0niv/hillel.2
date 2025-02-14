import React from "react";
import { Typography, Paper, Container, Chip, Stack } from "@mui/material";

function Home() {
    return (
        <Container>
            <Paper sx={{ padding: 3, marginTop: 2 }}>
                <Typography variant="h4">Maksym Iliev</Typography>
                <Typography variant="h6" color="text.secondary">
                    Junior Front-end Developer
                </Typography>

                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    Hi! I am a Junior Front End Developer. Even though I don't have much work experience yet, I am very eager to learn and grow. I enjoy finding and studying information that helps me and my team.

                    I like Front End development because it requires careful attention to detail and allows for creativity. I know HTML, CSS, JavaScript, basic React, and how to use Git, GitHub, and npm. I want to get better at these skills and learn new ones while working with experienced people.

                    I am excited about this fast-changing field and am determined to make it my career. I believe my skills in communication, solving problems, managing priorities, and working alone will help me succeed in Front End development.
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 3 }}>Skills:</Typography>
                <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
                    {["HTML5", "CSS", "SCSS/SASS", "GIT", "JS", "DOM", "GitHub","Bootstrap", "React", "npm" ].map(skill => (
                        <Chip key={skill} label={skill} color="primary" />
                    ))}
                </Stack>

                <Typography variant="h6" sx={{ marginTop: 3 }}>Education:</Typography>
                <Typography variant="body1">
                    Software engineering at "Professional College of Communication and Informatization" (2022 - Present)
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 3 }}>Courses:</Typography>
                <Typography variant="body1">Front-end for teens at Hillel IT School (2021) <a href="https://certificate.ithillel.ua/view/85634186">Certificate</a></Typography>
                <Typography variant="body1">Front-end Basic at Hillel IT School (2023) <a href="https://certificate.ithillel.ua/view/98002733">Certificate</a></Typography>
                <Typography variant="body1">Front-end Pro at Hillel IT School (2024)</Typography>
            </Paper>
        </Container>
    );
}

export default Home;
