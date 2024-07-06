import React, { useContext, useMemo } from 'react'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';
import { UiContext } from '../../auth/UiContext';

export const HeroScreen = () => {

    const params = useParams(); //get params from navbar
    const hero = useMemo(() => getHeroesById(params.heroeId), [params]); // avoid executing this var again if params aren't changed
    const history = useHistory(); //to manipulate web history and poisitioning
    const { theme } = useContext(UiContext);

    if (!hero) {
        return <Redirect to={'/'} />
    }

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <div className='row mt-5'>
            <div className='col-4 animate__animated animate__fadeInLeft'>
                <img
                    src={hero.image}
                    alt={hero.superhero}
                    className='img-thumbnail'
                />
            </div>
            <div className='col-8 animate__animated animate__fadeInRight'>
                <h3 style={{ fontWeight: 'bold'}}> {hero.superhero} </h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego} </li>
                    <li className='list-group-item'> <b>Publisher:</b> {hero.publisher} </li>
                    <li className='list-group-item'> <b>First Appearance:</b> {hero.first_appearance} </li>
                    <li className='list-group-item'> <b>Characters:</b> {hero.characters} </li>
                </ul>
                <div className='mt-4 col-12'>
                    <button className={theme.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} style={{ width: '100%' }} onClick={handleReturn}>
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
