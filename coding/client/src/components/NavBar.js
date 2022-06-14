import { Link } from "react-router-dom"
import Header from "./Header"
import '../css/navbar.css'


const NavBar =({users, setCurrentUser, setCurrentUserStickes}) => {
    
    return (
        <>
        
            <nav className = "navbar" id="navbar">
         
                <h1>ERIK</h1>
        
                <div className="links">
                
                    <Link to ='/'>   Home   </Link>
                    <Link to='/quiz'>  Quiz   </Link>
                    <Link to='/rubberducking'>  Rubber Duck   </Link>
                    <Link to='/stickies'>  Pin Board   </Link>
                    <Link to='/anecdotes'>  overReacting?   </Link>
                    <Link to='/links'>  Useful Links </Link>
                    <Header 
                        users={users}
                        setCurrentUser={setCurrentUser}
                        setCurrentUserStickes={setCurrentUserStickes}
                    />

                </div>

            </nav>

        </>

    )
}

export default NavBar