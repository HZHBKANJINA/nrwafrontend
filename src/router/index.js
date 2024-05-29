import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import AddCity from '@/components/AddCity.vue';
import AddCountry from '@/components/AddCountry.vue';
import AddCountryLanguage from '@/components/AddCountryLanguage.vue';

const routes = [
    {
        path: '/',
        name: 'MainView',
        component: MainView,
    },
    {
        path: '/add-city',
        name: 'AddCity',
        component: AddCity,
    },
    {
        path: '/add-country',
        name: 'AddCountry',
        component: AddCountry,
    },
    {
        path: '/add-country-language',
        name: 'AddCountryLanguage',
        component: AddCountryLanguage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
