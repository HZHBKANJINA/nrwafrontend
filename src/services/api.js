import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Ispravan Laravel API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {

    getCities() {
        return apiClient.get('/cities');
    },
    getCity(id) {
        return apiClient.get(`/cities/${id}`);
    },
    addCity(city) {
        return apiClient.post('/cities', city);
    },
    updateCity(id, city) {
        return apiClient.put(`/cities/${id}`, city);
    },
    deleteCity(id) {
        return apiClient.delete(`/cities/${id}`);
    },

    // Countries CRUD operations
    getCountries() {
        return apiClient.get('/countries');
    },
    getCountry(id) {
        return apiClient.get(`/countries/${id}`);
    },
    addCountry(country) {
        return apiClient.post('/countries', country);
    },
    updateCountry(id, country) {
        return apiClient.put(`/countries/${id}`, country);
    },
    deleteCountry(id) {
        return apiClient.delete(`/countries/${id}`);
    },

    // CountryLanguages CRUD operations
    getCountryLanguages() {
        return apiClient.get('/country-languages');
    },
    getCountryLanguage(id) {
        return apiClient.get(`/country-languages/${id}`);
    },
    addCountryLanguage(countryLanguage) {
        return apiClient.post('/country-languages', countryLanguage);
    },
    updateCountryLanguage(id, countryLanguage) {
        return apiClient.put(`/country-languages/${id}`, countryLanguage);
    },
    deleteCountryLanguage(id) {
        return apiClient.delete(`/country-languages/${id}`);
    },
};
