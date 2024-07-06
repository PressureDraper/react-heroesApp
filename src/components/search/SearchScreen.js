import React, { useContext, useEffect, useMemo, useState } from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { UiContext } from '../../auth/UiContext';

export const SearchScreen = () => {
    const { theme } = useContext(UiContext);

    const [values, setValues] = useState({
        value1: '',
        value2: ''
    })

    const [heroesFiltered, setHeroes] = useState(heroes);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const newHeroes = heroes.filter(hero => hero.superhero.toUpperCase().includes(values.value1.toUpperCase()));
        
        setHeroes(newHeroes);
        setValues({ ...values, value1: '' });
    }

    const handleSearchKeyDown = (e) => {
        setValues({ ...values, value2: e.target.value });
        const newHeroes = heroes.filter(hero => hero.superhero.toUpperCase().includes(values.value2.toUpperCase()));

        if (e.target.value == '') {
            setHeroes(heroes);
        } else {
            setHeroes(newHeroes);
        }
    }

    return (
        <div>
            <h1 style={{ color: theme.theme === 'light' ? 'black' : 'whitesmoke' }}>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>

                    <form className='mt-1' onSubmit={(e) => handleSearchSubmit(e)}>
                        <h4 style={{ color: theme.theme === 'light' ? 'black' : 'whitesmoke' }}>Input Search Submit</h4>
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
                            className={ theme.theme === 'light' ? 'btn mt-3 btn-outline-dark' : 'btn mt-3 btn-outline-light'}
                            style={{ width: '100%' }}
                        >
                            Search
                        </button>
                    </form>

                    <h4 style={{ color: theme.theme === 'light' ? 'black' : 'whitesmoke' }} className='mt-4'>Input Search onKeyDown</h4>
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
