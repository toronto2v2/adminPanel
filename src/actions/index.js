// import { createAction } from "@reduxjs/toolkit";
import {heroesFetching,heroesFetched,heroesFetchingError} from '../components/heroesList/heroesSlice'
import { updateFilters } from '../components/heroesFilters/HeroesFiltersSlice';

// export const fetchHeroes = (request) => (dispatch) => {
//     dispatch(heroesFetching());
//     request("http://localhost:3001/heroes")
//         .then(data => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()))
// }
// export const downloadFilters = (request) => (dispatch) => {
//     request("http://localhost:3001/filters")
//     .then(data => dispatch(updateFilters(data)))
// }

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

// payload в createAction передается автоматически
// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }

// payload в createAction передается автоматически
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');


// export const heroesDelete = (heroesModifyed) => {
//     return {
//         type: 'REMOVE_SELECTED_HERO',
//         payload: heroesModifyed,
//     }
// }

// payload в createAction передается автоматически
// export const heroesDelete = createAction('REMOVE_SELECTED_HERO');

// export const addHero = (addedHero) => {
//     return {
//         type: 'ADD_NEW_HERO',
//         payload: addedHero,
//     }
// }

// payload в createAction передается автоматически
// export const addHero = createAction('ADD_NEW_HERO');




// export const updateFilters = (filters) => {
//     return {
//         type: 'FILTER_UPDATE',
//         payload: filters,
//     }
// }

// export const setFilter = (activeFilter) => {
//     return {
//         type: 'SET_FILTER',
//         payload: activeFilter,
//     }
// }