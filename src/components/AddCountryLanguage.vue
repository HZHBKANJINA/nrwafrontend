<template>
    <div>
        <h1>Add Country Language</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="countryCode">Country Code:</label>
                <input type="text" v-model="countryLanguage.CountryCode" required />
            </div>
            <div>
                <label for="language">Language:</label>
                <input type="text" v-model="countryLanguage.Language" required />
            </div>
            <div>
                <label for="isOfficial">Is Official:</label>
                <select v-model="countryLanguage.IsOfficial" required>
                    <option value="T">True</option>
                    <option value="F">False</option>
                </select>
            </div>
            <div>
                <label for="percentage">Percentage:</label>
                <input type="number" v-model="countryLanguage.Percentage" step="0.1" required />
            </div>
            <button type="submit">Add Country Language</button>
        </form>
    </div>
</template>

<script>
import api from '@/services/api';

export default {
    data() {
        return {
            countryLanguage: {
                CountryCode: '',
                Language: '',
                IsOfficial: 'F',
                Percentage: 0.0,
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await api.addCountryLanguage(this.countryLanguage);
                console.log('Country Language added:', response.data);
            } catch (error) {
                console.error('Error adding country language:', error);
            }
        },
    },
};
</script>
