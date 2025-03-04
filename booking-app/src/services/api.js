import axios from 'axios';

const API_URL =  process.env.REACT_APP_API_URL;

export const fetchDestinations = async () => {
    const response = await axios.get(`${API_URL}/destinations`);
    return response.data;
};

export const fetchHotels = async (formData) => {
    const response = await axios.get(`${API_URL}/hotels`, {
        params: formData, // Передаем данные формы как параметры запроса
    });
    return response.data;
};