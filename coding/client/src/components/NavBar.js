import { Link } from "react-router-dom"
import Header from "./Header"
import '../css/navbar.css'


const NavBar =({users}) => {
    return (
        <>
        
            <nav className = "navbar" id="navbar">
         
                <h1>ERIK</h1>
        
                <div className="links">
                
                    <Link to ='/'>   Home   </Link>
                    <a href='/quiz'>  Quiz   </a>
                    <Link to='/rubberducking'>  Rubber Duck   </Link>
                    <a href='/stickies'>  Pin Board   </a>
                    <Link to='/anecdotes'>  overReacting?   </Link>
                    <Link to='/links'>  Useful Links </Link>
                    <Header users={users}/>

                </div>

            </nav>

        </>

    )
}

export default NavBar