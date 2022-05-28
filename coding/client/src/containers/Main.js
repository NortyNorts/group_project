import React, {useState, useEffect} from 'react'
import Anecdotes from '../components/Anecdotes'
import Header from '../components/Header'
import Links from '../components/Links'
import Quiz from './Quiz'
import RubberDucking from './RubberDucking'
import Stickies from './Stickies'
import LoginForm from '../components/LoginForm'
import "../css/main.css"


const Main = (()=>{

    const [isShowLogin, setIsShowLogin] = useState(false)

    const handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => ! isShowLogin)
    }

    return(
        <>
            <div className="Main">
                <Header handleLoginClick={handleLoginClick}/>
                <LoginForm isShowLogin={isShowLogin}/>
            </div>
            <Quiz/>
            <Stickies/>
            <Anecdotes/>
            <Links/>
            <RubberDucking/>
        </>
    )
})

export default Main