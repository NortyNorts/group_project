import Main from './containers/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz';
import Stickies from './containers/Stickies';
import RubberDucking from './containers/RubberDucking';
import Anecdotes from './components/Anecdotes';
import Links from './components/Links';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './css/stickies.css'

function App() {
  return (

    <Router>
      <div className='App'>
          <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path="/"> <Home /></Route>
            
            <Route exact path="/quiz"><Quiz /></Route>
            
            <Route path="/stickies"><Stickies /></Route>
            
            <Route path="/rubberducking"><RubberDucking /></Route>

            <Route path="/anecdotes"><Anecdotes/></Route>

            <Route path="/links"><Links/></Route>

            <Route path="/All"><Main/></Route>
  
          </Switch>
        </div>
      </div>




    </Router>
   
  );
}

export default App;
