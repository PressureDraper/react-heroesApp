import React, { useContext } from 'react'
import { HeroList } from '../heroes/HeroList'
import { UiContext } from '../../auth/UiContext';

export const MarvelScreen = () => {
    const { theme } = useContext(UiContext);

    return (
        <div>
            <h1 style={{ color: theme.theme === 'light' ? 'black' : 'whitesmoke' }}>Marvel Screen</h1>
            <hr style={{ backgroundColor: 'white', height: '2px' }} />
            <HeroList publisher='Marvel Comics' />
        </div>
    )
}
