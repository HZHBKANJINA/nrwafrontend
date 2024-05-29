<template>
    <div>
        <h1>Welcome to Main View</h1>
        <button @click="showAddCity = !showAddCity">Toggle Add City</button>
        <button @click="showAddCountry = !showAddCountry">Toggle Add Country</button>
        <button @click="showAddCountryLanguage = !showAddCountryLanguage">Toggle Add Country Language</button>

        <AddCity v-if="showAddCity" />
        <AddCountry v-if="showAddCountry" />
        <AddCountryLanguage v-if="showAddCountryLanguage" />

        <h2>Cities</h2>
        <ul>
            <li v-for="city in cities" :key="city.ID">{{ city.Name }}</li>
        </ul>

        <h2>Countries</h2>
        <ul>
            <li v-for="country in countries" :key="country.Code">{{ country.Name }}</li>
        </ul>

        <h2>Country Languages</h2>
        <ul>
            <li v-for="cl in countryLanguages" :key="`${cl.CountryCode}-${cl.Language}`">{{ cl.Language }}</li>
        </ul>
    </div>
</template>

<script>
import AddCity from '@/components/AddCity.vue';
import AddCountry from '@/components/AddCountry.vue';
import AddCountryLanguage from '@/components/AddCountryLanguage.vue';
import api from '@/services/api';

export default {
    components: {
        AddCity,
        AddCountry,
        AddCountryLanguage,
    },
    data() {
        return {
            showAddCity: false,
            showAddCountry: false,
            showAddCountryLanguage: false,
            cities: [],
            countries: [],
            countryLanguages: [],
        };
    },
    async created() {
        await this.fetchCities();
        await this.fetchCountries();
        await this.fetchCountryLanguages();
    },
    methods: {
        async fetchCities() {
            try {
                const response = await api.getCities();
                this.cities = response.data;
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        },
        async fetchCountries() {
            try {
                const response = await api.getCountries();
                this.countries = response.data;
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        },
        async fetchCountryLanguages() {
            try {
                const response = await api.getCountryLanguages();
                this.countryLanguages = response.data;
            } catch (error) {
                console.error('Error fetching country languages:', error);
            }
        },
    },
};
</script>
