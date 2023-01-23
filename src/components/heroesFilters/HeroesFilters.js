import { useSelector, useDispatch } from "react-redux";
import { createSelector } from '@reduxjs/toolkit'

import { setFilter, selectAll } from "./HeroesFiltersSlice";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    // const {filters,activeFilter} = useSelector(state => state.filters);
    const filterSelector = createSelector(
        (state) => state.filters.activeFilter,
        selectAll,
        (activeFilter, allFilters) => {
            return {activeFilter, allFilters}
        }
    )

    const filters = useSelector(filterSelector);

    const dispatch = useDispatch();

    const onFilterClick = (value) => {
        dispatch(setFilter(value))
    }

    const filtersPanel = filters.allFilters.map((item, i) => {
        return <button className={item.value === filterSelector.activeFilter ? item.className + ' active' : item.className} 
                       onClick={() =>  onFilterClick(item.value)} 
                       key = {i}
                       >{item.alternativeName} 
                </button>
    }) 


    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filtersPanel}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;