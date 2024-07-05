import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className='container mt-5'>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }></Route>
                    <Route exact path="/:publisher/hero/:heroeId" component={ HeroScreen }></Route>
                    <Route exact path="/dc" component={ DcScreen }></Route>
                    <Route exact path="/search" component={ SearchScreen }></Route>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </div>
    )
}
