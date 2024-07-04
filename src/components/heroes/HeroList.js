import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div class="row row-cols-4 g-4">
            {
                heroes.map(hero => {
                    return <HeroCard key={hero.id} {...hero} />
                })
            }
        </div>
    )
}
