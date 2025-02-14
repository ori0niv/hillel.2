import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import SwapiPage from "./pages/SwapiPage";


function App() {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/swapi" element={<SwapiPage />} />
        </Routes>
        <Footer />
      </Container>
  );
}

export default App;
