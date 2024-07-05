import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = (hero) => {

    const link = `/${hero.publisher}/hero/${hero.id}`
    
    return (
        <div class="col">
            <div class="card">
                <img src={hero.image} class="card-img-top" alt={hero.id} />
                <div class="card-body">
                    <h3 style={{ fontWeight: 'bold' }} class="card-title"> {hero.superhero} </h3>
                    <h5 class="card-title">{hero.alter_ego}</h5>
                    <p class="card-text">
                        {hero.first_appearance}
                    </p>
                    <Link to={link}>
                        <button className='btn btn-outline-dark' style={{ width: '100%'}}>Info</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
