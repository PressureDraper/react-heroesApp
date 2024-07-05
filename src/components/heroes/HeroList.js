import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]); // avoid executing this var again if params aren't changed

    return (
        <div class="row row-cols-4 g-4 animate__animated animate__fadeIn">
            {
                heroes.map(hero => {
                    return <HeroCard key={hero.id} {...hero} />
                })
            }
        </div>
    )
}
