import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

function SwapiPage() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then(response => setCharacters(response.data.results))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <Paper sx={{ padding: 3, marginTop: 2 }}>
            <Typography variant="h5">Персонажі Star Wars</Typography>
            <List>
                {characters.map((char, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={char.name} secondary={`Зріст: ${char.height} см, Вага: ${char.mass} кг`} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default SwapiPage;
