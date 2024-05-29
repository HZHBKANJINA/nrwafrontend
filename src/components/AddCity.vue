<template>
    <div>
        <h1>Add City</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="city.Name" required />
            </div>
            <div>
                <label for="countryCode">Country Code:</label>
                <input type="text" v-model="city.CountryCode" required />
            </div>
            <div>
                <label for="district">District:</label>
                <input type="text" v-model="city.District" required />
            </div>
            <div>
                <label for="population">Population:</label>
                <input type="number" v-model="city.Population" required />
            </div>
            <button type="submit">Add City</button>
        </form>
    </div>
</template>

<script>
import api from '@/services/api';

export default {
    data() {
        return {
            city: {
                Name: '',
                CountryCode: '',
                District: '',
                Population: 0,
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await api.addCity(this.city);
                console.log('City added:', response.data);
            } catch (error) {
                console.error('Error adding city:', error);
            }
        },
    },
};
</script>
