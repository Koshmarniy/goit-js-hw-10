import './css/styles.css';

import Notiflix from 'notiflix';

import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector ('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch (e) {
    const nameCountries = e.target.value.trim();

    clearMarkup();

    if(!nameCountries) {
        return;
    }
    fetchCountries(nameCountries).then(getCountries).catch(fetchError);
}

function getCountries(countries) {
    
}