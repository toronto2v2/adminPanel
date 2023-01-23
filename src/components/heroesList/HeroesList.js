import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'

import {heroesDelete,fetchHeroes, selectAll} from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

    const modufySelector = createSelector(
        (state) => state.filters.activeFilter,
        selectAll,
        (filter, heroes) => {
            return {filter, heroes}
        }
    )

    const {heroesLoadingStatus} = useSelector(state => state.heroes);
    const getFilters = useSelector(modufySelector)
    const dispatch = useDispatch();
    const {request} = useHttp();
    

    useEffect(() => {
        dispatch(fetchHeroes())

        // eslint-disable-next-line
    }, []);

    const onDelete = (num) => {
        const newHeroList = getFilters.heroes.filter(item => item.id !== num);
        dispatch(heroesDelete(newHeroList));
        request(`http://localhost:3001/heroes/${num}`, 'DELETE');
    }

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.filter(item => getFilters.filter === 'all' ? item : item.element === getFilters.filter)
                  .map(({id, ...props}) => {
                    return <HeroesListItem key={id} onDelete = {() => onDelete(id)} {...props}/>
        })
    }

    const elements = renderHeroesList(getFilters.heroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;