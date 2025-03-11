import axios from 'axios';

export const fetchDestinations = async () => {
    try {
        console.log('Sending request to: /destinations'); // Логируем относительный путь
        const response = await axios.get('/destinations', {
            timeout: 5000,
        });
        console.log('Response from server:', response.data);
        return response.data;
    } catch (error) {
        console.error('Network Error Details:', {
            message: error.message,
            code: error.code,
            config: error.config ? error.config.url : 'No config',
        });
        throw error;
    }
};

export const fetchHotels = async (formData) => {
    try {
        console.log('Sending request to: /hotels', 'with params:', formData);
        const response = await axios.get('/hotels', {
            params: formData,
            timeout: 5000,
        });
        console.log('Response from server:', response.data);
        return response.data;
    } catch (error) {
        console.error('Network Error Details:', {
            message: error.message,
            code: error.code,
            config: error.config ? error.config.url : 'No config',
        });
        throw error;
    }
};