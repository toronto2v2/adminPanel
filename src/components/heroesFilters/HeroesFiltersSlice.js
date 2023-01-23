import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const heroesFiltersAdapter = createEntityAdapter();

// const initialState = {
//     filters: [],
//     activeFilter: 'all'
// }

const initialState = heroesFiltersAdapter.getInitialState({
    activeFilter: 'all',
})

export const updateFilters = createAsyncThunk(
    'filters/updateFilters',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/filters");

    }
)

const filtersSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {state.activeFilter = action.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateFilters.fulfilled, (state, action) => {heroesFiltersAdapter.setAll(state, action.payload)})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = filtersSlice;

export const {selectAll} = heroesFiltersAdapter.getSelectors((state) => state.filters)


export default reducer;
export const {
    setFilter
} = actions;
