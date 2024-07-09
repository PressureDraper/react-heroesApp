import React, { useEffect, useReducer } from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { UiContext } from '../auth/UiContext'
import { uiReducer } from '../reducers/uiReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('theme')) || { theme: 'light' };
}

export const DashboardRoutes = () => {
    const [theme, dispatch] = useReducer(uiReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return (
        <UiContext.Provider value={{ theme, dispatch }}>
            <div style={{ backgroundColor: theme.theme === 'light' ? 'white' : 'black', minHeight: '100vh', transition: 'all 0.3s ease' }}>
                <Navbar />
                <div className='container mt-5'>
                    <Switch>
                        <Route exact path="/marvel" component={MarvelScreen} />
                        <Route exact path="/:publisher/hero/:heroeId" component={HeroScreen} />
                        <Route exact path="/dc" component={DcScreen} />
                        <Route exact path="/search" component={SearchScreen} />

                        <Redirect to="/marvel" />
                    </Switch>
                </div>
            </div>
        </UiContext.Provider>
    )
}
