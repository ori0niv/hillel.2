// Исправленный App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import store, { history } from './redux/store';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import HotelsPage from './pages/HotelsPage';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function App() {
  return (
      <Provider store={store}>
        <Router history={history}>
          <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
            <Toolbar>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <Box sx={{ width: 30, height: 30, backgroundColor: '#ff9800', borderRadius: '50%', mr: 1 }} />
                <Typography variant="h6" sx={{ color: '#ff9800' }}>
                  Booking
                </Typography>
              </Box>
              <Button href="/" sx={{ color: '#ff9800', textTransform: 'uppercase' }}>
                Home
              </Button>
              <Button href="/about" sx={{ color: '#ff9800', textTransform: 'uppercase' }}>
                About
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} /> {/* Исправлено с MainPage на AboutPage */}
            <Route path="/hotels" element={<HotelsPage />} />
          </Routes>
        </Router>
      </Provider>
  );
}

export default App;
