import React, { useContext } from 'react'
import { HeroList } from '../heroes/HeroList'
import { UiContext } from '../../auth/UiContext';

export const DcScreen = () => {
  const { theme } = useContext(UiContext);

  return (
    <div>
      <h1 style={{ color: theme.theme === 'light' ? 'black' : 'whitesmoke' }}>DC Screen</h1>
      <hr style={{ backgroundColor: 'white', height: '2px' }} />
      <HeroList publisher={'DC Comics'} />
    </div>
  )
}
