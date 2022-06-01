import { Link } from "react-router-dom"
import Header from "./Header"
import '../css/stickies.css'

const NavBar =({users}) => {
    return (
        <>
        <nav className = "navbar" id="navbar">
            <Header users={users}/>
        <h1>ERIK</h1>
        <div className="links">
            <Link to ='/'>  Home  - </Link>
            <a href='/quiz'>  Quiz  - </a>
            <Link to='/rubberducking'>  Rubber Duck  - </Link>
            <a href='/stickies'>  Pin Board  - </a>
            <Link to='/anecdotes'>  Anecdotes  - </Link>
            <Link to='/links'>  Links</Link>
        </div>

        </nav>
        </>

    )
}

export default NavBar