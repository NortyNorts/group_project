import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz';
import Stickies from './containers/Stickies';
import RubberDucking from './containers/RubberDucking';
import Anecdotes from './components/Anecdotes';
import Links from './components/Links';
import NavBar from './components/NavBar';
import Home from './components/Home';
import React, {useState, useEffect} from 'react'
import UsersService from './services/UserService';
import QuizService from './services/QuizService';
import './css/stickies.css'

function App() {
  
  const [users, setUsers] = useState ([])
  const [quiz, setQuiz] = useState ([])
  const [userCorrectAnswers, setUserCorrectAnswers] = useState([])
  const [userWrongAnswers, setUserWrongAnswers] = useState([])
  const [finalScore, setFinalScore] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserStickes, setCurrentUserStickes] = useState({
    notes: [
    ],
})

  useEffect(() => {
      UsersService.getUsers()
          .then(users => setUsers(users));
      QuizService.getQuiz()
          .then(quiz => setQuiz(quiz))
    }, []);


  const notesReducer = (prevState, action) => {
      switch (action.type) {
          case 'ADD_NOTE': {
              const newState = { 
                  notes: [...prevState.notes, action.payload],
                  lastNoteCreated: new Date().toTimeString().slice(0, 8)
              };
              setCurrentUserStickes(newState);
              UsersService.updateStickies(newState, currentUser._id);
              return newState;
          }
  
          case 'DELETE_NOTE': {
              const newState = {
                  ...prevState,
                  notes: prevState.notes.filter(note => note.id !== action.payload.id)
              };
              setCurrentUserStickes(newState);
              UsersService.updateStickies(newState, currentUser._id)
              return newState;
          }
      }
    }
  
  return (
    <Router>
      <div className='App'>
          
          <NavBar 
            users={users}
            setCurrentUser={setCurrentUser} 
            setCurrentUserStickes={setCurrentUserStickes}
          />
        
        <div className='content'>
          <Switch>

            <Route exact path="/"> <Home /></Route>
            
            <Route exact path="/quiz">
              <Quiz 
                finalScore={finalScore}
                setFinalScore={setFinalScore} 
                setUserWrongAnswers={setUserWrongAnswers}
                userWrongAnswers={userWrongAnswers}
                setUserCorrectAnswers={setUserCorrectAnswers}
                userCorrectAnswers={userCorrectAnswers}
                quiz={quiz}
                />
            </Route>
            
            <Route path="/stickies">
              <Stickies
                notesReducer={notesReducer}
                setCurrentUserStickes={setCurrentUserStickes}
                currentUserStickes={currentUserStickes}
              />
            </Route>
            
            <Route path="/rubberducking"><RubberDucking /></Route>

            <Route path="/anecdotes"><Anecdotes/></Route>

            <Route path="/links"><Links/></Route>
  
          </Switch>
        
        </div>
      
      </div>
    
    </Router>
  );
}

export default App;