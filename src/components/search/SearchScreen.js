import React, { useMemo, useState } from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const [values, setValues] = useState({
        value1: '',
        value2: ''
    })

    const [heroesFiltered, setHeroes] = useState(heroes);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const newHeroes = heroes.filter(hero => hero.superhero.toUpperCase().includes(values.value1.toUpperCase()));
        setHeroes(newHeroes);
    }

    const handleSearchKeyDown = (e) => {
        setValues({ ...values, value2: e.target.value });
        const newHeroes = heroes.filter(hero => hero.superhero.toUpperCase().includes(values.value2.toUpperCase()));
        setHeroes(newHeroes);
    }

    console.log(values);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>

                    <form className='mt-1' onSubmit={(e) => handleSearchSubmit(e)}>
                        <h4>Input Search Submit</h4>
                        <input
                            type='text'
                            placeholder='Type your hero'
                            className='form-control'
                            value={values.value1}
                            autoComplete='off'
                            onChange={(e) => setValues({ ...values, value1: e.target.value })}
                        />

                        <button
                            type='submit'
                            className='btn mt-3 btn-outline-primary'
                            style={{ width: '100%' }}
                        >
                            Search
                        </button>
                    </form>

                    <h4 className='mt-4'>Input Search onKeyDown</h4>
                    <input
                        type='text'
                        placeholder='Type your hero'
                        className='form-control'
                        value={values.value2}
                        autoComplete='off'
                        onChange={(e) => handleSearchKeyDown(e)}
                    />
                </div>

                <div className='col-7 row row-cols-2 animate__animated animate__fadeIn'>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
