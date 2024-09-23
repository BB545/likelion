import React from 'react'
import Main1 from './main_components/Main1'
import MainButton from './main_components/MainButton'
import Main2 from './main_components/Main2'
import Main3 from './main_components/Main3'

const Main = () => {
  return (
    <div id='wrapper'>
        <Main1 />
        <MainButton />
        <Main2 />
        <Main3 />
    </div>
  )
}

export default Main