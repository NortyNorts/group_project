import React from 'react'
import Anecdotes from '../components/Anecdotes'
import Header from '../components/Header'
import Links from '../components/Links'
import Quiz from './Quiz'
import RubberDucking from './RubberDucking'
import Stickies from './Stickies'


const Main = (()=>{
    return(
        <>
            <h1>I am the Main container</h1>
            <Header/>
            <Quiz/>
            <Stickies/>
            <Anecdotes/>
            <Links/>
            <RubberDucking/>
        </>
    )
})

export default Main