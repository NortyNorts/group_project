import '../css/anecdotes.css'
import bust1 from "../images/bust1.png"
import bust2 from "../images/bust2.png"
import bust3 from "../images/bust3.png"
import bust4 from "../images/bust4.png"
import bust5 from "../images/bust5.png"

const Anecdotes = (()=>{
    return(
        <>
        <div className='anecdotes-container'>
            {/* <h2>Anecdotes</h2> */}
            <div className='bust-container'>
          <img src={bust1} id="bust"/>
          <img src={bust3} id="bust"/>
          <img src={bust4} id="bust"/>
          <img src={bust2} id="bust"/>
          <img src={bust5} id="bust"/>
          </div>
          {/* <div class="break"></div> */}
            
<h5>You are at the end of week 1 of the Professional Software Development course at CodeClan.
<p></p>
You have just covered  week 1 syllabus  and are likely looking to recap what you’ve just learned.</h5>
<p>
<b>You are probably thinking:</b>
<ul>
<li>I don’t know yet whether I’ll be able to keep up</li>
<li>Day 2 homework was a lot, I hope it’s not all like that</li>
<li>This is a brand new life that we have to adapt to</li>
<li> i don’t think i will ever get to the expected level (imposter syndrome)</li>
<li>i feel in-over-my-head</li>
<li>this is daunting. i hope i can make it. but it’s exciting</li>
<li>this isn’t clicking like i thought it would </li>
</ul>

<b>You are probably feeling:</b>
<ul>
<li>apprehensive - it’s a lot of work!</li>
<li>excited - meeting  a lot of people in an educational environment </li>
<li>a false sense of security and what’s the catch </li>
<li>overwhelmed by so many new concepts</li>
<li>fear, but also a lot of excitement and hope</li>
</ul>
</p>
<h3>It's totally normal, you'll be fine!!</h3>
</div>
        </>
    )
})

export default Anecdotes