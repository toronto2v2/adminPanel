import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const heroesAdapter = createEntityAdapter();

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle',
});

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes");
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        addHero: (state, action) => { heroesAdapter.addOne(state, action.payload); },
        heroesDelete: (state, action) => { heroesAdapter.setAll(state, action.payload); }
    }, 
    extraReducers: (buider) => {
        buider
            .addCase(fetchHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
            .addCase(fetchHeroes.fulfilled,(state, action) => { state.heroesLoadingStatus = 'idle'; 
                     heroesAdapter.setAll(state, action.payload);})
            .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error'; })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;

export const {selectAll} = heroesAdapter.getSelectors((state) => state.heroes)

export const {
    addHero,
    heroesDelete
} = actions;