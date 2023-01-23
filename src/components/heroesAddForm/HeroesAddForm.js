import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { updateFilters, selectAll } from "../heroesFilters/HeroesFiltersSlice";
import {addHero} from '../heroesList/heroesSlice';
import {useHttp} from '../../hooks/http.hook';



// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [heroName, setHeroName ] = useState('');
    const [heroDescr, setHeroDescr] = useState('');
    const [element, setElement] = useState('');

    const filters = useSelector(selectAll);

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(updateFilters())
        // eslint-disable-next-line
    }, [])

    const onNameChange = (e) => {
        setHeroName(e.target.value)
    }
    const onDescrChange = (e) => {
        setHeroDescr(e.target.value)
    }
    const onSelectChange = (e) => {
        if(e.target.value === 'Я владею элементом...'){
            return setElement('')
        }
        setElement(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setHeroName('');
        setHeroDescr('');
        setElement('');
        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDescr,
            element,
        }

        dispatch(addHero(newHero));

        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero));

    }

    const filtersArr = filters.map((item,i) => {
        return <option value={item.value} key = {i}>{item.description}</option>
    })

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input onChange={(e) => onNameChange(e)}
                    value={heroName}
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={(e) => onDescrChange(e)}
                    value={heroDescr}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select onChange={(e) => onSelectChange(e)}
                    value={element}
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    {/* <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option> */}
                    {filtersArr}
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={(e) => onFormSubmit(e)}>Создать</button>
        </form>
    )
}

export default HeroesAddForm;