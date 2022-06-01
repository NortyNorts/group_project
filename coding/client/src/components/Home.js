import { Link } from "react-router-dom"
import '../css/home.css'
import person1 from "../images/person1.png"
import person2 from "../images/person2.png"
import person3 from "../images/person3.png"
import person4 from "../images/person4.png"
import duck from "../images/duck.png"



const Home = (()=>{
    return(
    

      <body>

        <div className='welcome-div'>
        <h4>Welcome</h4>
          <div className='welcome-text'>

          <p><em>Meet Erik.<br></br>An educational app for students enrolled in the 16 week immersive Software Development course at CodeClan, a digital skills academy based in Scotland.</em></p>
        
        </div>

        </div >

        
        
        <div className='person-container'>
          <Link to='/anecdotes'><img src={person1} id="people"/></Link>
          <Link to='/quiz'><img src={person3} id="people"/></Link>
          <Link to='/stickies'><img src={person4} id="people"/></Link>
          <Link to='/links'><img src={person2} id="people"/></Link>
          </div>
          <div class="break"></div>
        
          
        <div className="person-text-selection">
          <Link to='/anecdotes'><h5>Anecdotes</h5></Link>
          <Link to='/quiz'><h5>Quiz</h5></Link>
          <Link to='/stickies'><h5>Pin Board</h5></Link>
          <Link to='/links'><h5>Useful Links</h5></Link>
        </div>

        <div className="duck-container">

        <p className="duck-text">
          Feeling stuck? Talk to your duck!
        </p>

        <Link to='/rubberducking'><img src={duck} id="ducking"/></Link>

        </div>

        <h3>Remember...</h3>
        <div className="fourBs">
          <p>Brain</p>
          <p>Books</p>
          <p>Buddy</p>
          <p>Boss</p>
          
        </div>

          
        <footer>

        <p>@elin</p>
        <p>@cam</p>
        <p>@adam</p>
        <p>@andrew</p>
        </footer>



        </body>
            

    )
})

export default Home