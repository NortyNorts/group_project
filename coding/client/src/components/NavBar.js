import { Link } from "react-router-dom"
import Header from "./Header"

const NavBar =() => {
    return (
        <>
        <nav className = "navbar">
            {/* <Header/> */}
        <h1>ERIK</h1>
        <div className="links">
            <Link to ='/'>  Home  - </Link>
            <a href='/quiztwo'>  Quiz  - </a>
            <Link to='/rubberducking'>  Rubber Duck  - </Link>
            <a href='/stickies'>  Pin Board  - </a>
            <Link to='/anecdotes'>  Anecdotes  - </Link>
            <Link to='/links'>  Links  - </Link>
            <Link to='/all'>  all  </Link>

        </div>

        </nav>
        </>

    )
}

export default NavBar