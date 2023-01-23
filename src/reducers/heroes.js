// import { createReducer } from "@reduxjs/toolkit"

// import {
//     heroesFetching,
//     heroesFetched,
//     heroesFetchingError,
//     heroesDelete,
//     addHero,
    
// } from '../actions'

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload;
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(addHero, (state, action) => {
//             state.hero.push(action.payload);
//         })
//         .addCase(heroesDelete, (state, action) => {
//             state.heroes = action.payload;
//         })
//         .addDefaultCase(() => {})
// })

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'REMOVE_SELECTED_HERO':{
//             return {
//                 ...state,
//                 heroes: action.payload,
//             }
//         }
//         case 'ADD_NEW_HERO':{
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         }
//         default: return state
//     }
// }

// export default heroes;