import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz';
import Stickies from './containers/Stickies';
import RubberDucking from './containers/RubberDucking';
import Anecdotes from './components/Anecdotes';
import Links from './components/Links';
import NavBar from './components/NavBar';
import Home from './components/Home';
import React, {useState, useEffect, useReducer} from 'react'
import UsersService from './services/UserService';
import QuizService from './services/QuizService';
import './css/stickies.css'

function App() {
  
  const [users, setUsers] = useState ([])
  const [quiz, setQuiz] = useState ([])
  const [userCorrectAnswers, setUserCorrectAnswers] = useState([])
  const [userWrongAnswers, setUserWrongAnswer] = useState([])
  const [finalScore, setFinalScore] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserStickes, setCurrentUserStickes] = useState({
    notes: [
    ],
})
  // const [initialNotesState, setinitialNotesState] = useState([])
  

  useEffect(() => {
      UsersService.getUsers()
          .then(users => setUsers(users));
      QuizService.getQuiz()
          .then(quiz => setQuiz(quiz))

      // NotesService.getNotes()
        // .then(notes => setinitialNotesState )
    }, []);

    
  //   const initialNotesState = {
  //     lastNoteCreated: null,
  //     notes: [
  //         // {id: '1', text: "I'm the first note", rotate: 12},
  //         // {id: '2', text: "I'm the second note", rotate: 2},
  //         // {id: '3', text: "I'm the thrid note", rotate: 8}
  //     ],
  // };


  // const initialStickiesState = () => {
  //   return currentUserStickes
  // };


  const notesReducer = (prevState, action) => {
      switch (action.type) {
          case 'ADD_NOTE': {
              const newState = { 
                  notes: [...prevState.notes, action.payload],
              };
              console.log('After ADD_NOTE: ', newState);
              return newState;
          }
  
          case 'DELETE_NOTE': {
              const newState = {
                  ...prevState,
                  notes: prevState.notes.filter(note => note.id !== action.payload.id)
              };
              console.log('After DELETE_NOTE: ', newState);
              return newState;
          }
  
          
          }
      }

      console.log("CurrentStickyFromDB",currentUserStickes)

  return (

    <Router>
      <div className='App'>
          <NavBar setCurrentUser={setCurrentUser} setCurrentUserStickes={setCurrentUserStickes} users={users}/>
        <div className='content'>
          <Switch>
            <Route exact path="/"> <Home /></Route>
            
            <Route exact path="/quiz"><Quiz finalScore={finalScore} setFinalScore={setFinalScore} setUserWrongAnswer={setUserWrongAnswer} userWrongAnswers={userWrongAnswers} setUserCorrectAnswers={setUserCorrectAnswers} userCorrectAnswers={userCorrectAnswers} quiz={quiz} /></Route>
            
            <Route path="/stickies"><Stickies setCurrentUserStickes={setCurrentUserStickes} currentUserStickes={currentUserStickes} currentUser={currentUser} notesReducer={notesReducer} /></Route>
            
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
