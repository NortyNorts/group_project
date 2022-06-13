import person5 from "../images/person5.png"
import '../css/usefullinks.css'


const Links = (()=>{
    return(
        <>
            <div className="useful-links-container">
            
                <img src={person5} id="person"/>
                
                <div className="useful-links-div">
                
                    <h2>Planning</h2>
                
                    <a href="https://app.diagrams.net/" target="_blank">App.Diagrams Creator</a>
                    <br/>
                    <a href="https://pomofocus.io/" target="_blank">Pomodoro Timer</a>
                    <br/>
                    <a href="https://trello.com/" target="_blank">Trello Planner</a>
                    <br/>
                    <a href="https://www.figma.com/" target="_blank">Figma Diagram Creator</a>

                    <h2>Design</h2>

                    <a href="https://coolors.co/" target="_blank">CSS Colour Palette Generator</a>
                    <br/>
                    <a href="https://css-tricks.com/" target="_blank">CSS Tricks</a>
                    <br/>
                    <a href="https://fonts.google.com/" target="_blank">CSS Google Fonts</a>
                    <br/>
                    <a href="https://unsplash.com/" target="_blank">Unsplash Free Images</a>

                    <h2>Coding</h2>

                    <a href="https://www.w3schools.com" target="_blank">w3schools Coding Resources</a>
                    <br/>
                    <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Coding Resources</a>
                    <br/>
                    <a href="https://readme.so/" target="_blank">README Creator</a>
                    <br/>
                    <a href="https://jsonformatter.org/" target="_blank">Json Formatter</a>

                    <h2>Games</h2>

                    <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a>
                    <br/>
                    <a href="https://flexboxfroggy.com/" target="_blank">CSS Flexbox Froggy</a>
                    <br/>
                    <a href="https://mastery.games/flexboxzombies/" target="_blank">CSS Flexbox Zombies</a>
                    <br/>
                    <a href="https://www.codingame.com/"target="_blank">Coding Games</a>

                </div>
                
            </div>
            
        </>
    )
})

export default Links