<template>
    <div>
        <h1>Add Country</h1>
        <form @submit.prevent="addCountry">
            <input v-model="country.Code" placeholder="Code" required>
            <input v-model="country.Name" placeholder="Name" required>
            <input v-model="country.Continent" placeholder="Continent" required>
            <input v-model="country.Region" placeholder="Region" required>
            <input v-model="country.SurfaceArea" placeholder="Surface Area" required type="number">
            <input v-model="country.IndepYear" placeholder="Independence Year" type="number">
            <input v-model="country.Population" placeholder="Population" required type="number">
            <input v-model="country.LifeExpectancy" placeholder="Life Expectancy" type="number">
            <input v-model="country.GNP" placeholder="GNP" type="number">
            <input v-model="country.GNPOld" placeholder="GNP Old" type="number">
            <input v-model="country.LocalName" placeholder="Local Name" required>
            <input v-model="country.GovernmentForm" placeholder="Government Form" required>
            <input v-model="country.HeadOfState" placeholder="Head of State">
            <input v-model="country.Capital" placeholder="Capital" type="number">
            <input v-model="country.Code2" placeholder="Code2" required>
            <button type="submit">Add Country</button>
        </form>
    </div>
</template>

<script>
import api from '@/services/api';

export default {
    data() {
        return {
            country: {
                Code: '',
                Name: '',
                Continent: '',
                Region: '',
                SurfaceArea: '',
                IndepYear: null,
                Population: '',
                LifeExpectancy: null,
                GNP: null,
                GNPOld: null,
                LocalName: '',
                GovernmentForm: '',
                HeadOfState: null,
                Capital: null,
                Code2: '',
            }
        };
    },
    methods: {
        async addCountry() {
            try {
                const response = await api.addCountry(this.country);
                console.log('Country added:', response.data);
            } catch (error) {
                console.error('Error adding country:', error);
            }
        }
    }
};
</script>
