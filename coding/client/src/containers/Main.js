import React, {useState, useEffect} from 'react'
import Anecdotes from '../components/Anecdotes'
import Header from '../components/Header'
import Links from '../components/Links'
import Quiz from './Quiz'
import RubberDucking from './RubberDucking'
import Stickies from './Stickies'
import "../css/main.css"
import UsersService from '../services/UserService'


const Main = (()=>{

    const [users, setUsers] = useState ([])
    

    useEffect(() => {
        UsersService.getUsers()
          .then(users => setUsers(users));
      }, []);



    return(
        <>
            <div className="Main">
                <Header users={users}/>
                {/* <LoginForm isShowLogin={isShowLogin}/> */}
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