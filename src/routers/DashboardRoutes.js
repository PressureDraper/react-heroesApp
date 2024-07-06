import React, { useReducer } from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { UiContext } from '../auth/UiContext'
import { uiReducer } from '../reducers/uiReducer'

export const DashboardRoutes = () => {
    const [theme, dispatch] = useReducer(uiReducer, { theme: 'light' });

    return (
        <UiContext.Provider value={{ theme, dispatch }}>
            <div style={{ backgroundColor: theme.theme === 'light' ? 'white' : 'black', minHeight: '100vh', transition: 'all 0.3s ease' }}>
                <Navbar dispatch={dispatch} />
                <div className='container mt-5'>
                    <Switch>
                        <Route exact path="/marvel" component={MarvelScreen}></Route>
                        <Route exact path="/:publisher/hero/:heroeId" component={HeroScreen}></Route>
                        <Route exact path="/dc" component={DcScreen}></Route>
                        <Route exact path="/search" component={SearchScreen}></Route>

                        <Redirect to="/login" />
                    </Switch>
                </div>
            </div>
        </UiContext.Provider>
    )
}
