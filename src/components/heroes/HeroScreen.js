import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const params = useParams();
  const hero = getHeroesById(params.heroeId);

  console.log(hero);

  return (
    <div>HeroScreen</div>
  )
}
