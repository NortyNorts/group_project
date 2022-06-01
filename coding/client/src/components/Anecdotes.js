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
            <h2>Anecdotes</h2>
            <div className='bust-container'>
          <img src={bust1} id="bust"/>
          <img src={bust3} id="bust"/>
          <img src={bust4} id="bust"/>
          <img src={bust2} id="bust"/>
          <img src={bust5} id="bust"/>
          </div>
          <div class="break"></div>
            <p>You are at the end of week 1 of the Professional Software Development course at CodeClan.

You have just covered  week 1 syllabus  and are likely looking to recap what you’ve just learned.

You are probably thinking:

- I don’t know yet whether I’ll be able to keep up
- Day 2 homework was a lot, I hope it’s not all like that
- This is a brand new life that we have to adapt to
- i don’t think i will ever get to the expected level (imposter syndrome)
- i feel in-over-my-head
- this is daunting. i hope i can make it. but it’s exciting
- this isn’t clicking like i thought it would 

You are probably feeling:

- apprehensive - it’s a lot of work!
- excited - meeting  a lot of people in an educational environment 
- a false sense of security and what’s the catch 
- overwhelmed by so many new concepts
- fear, but also a lot of excitement and hope
</p>
</div>
        </>
    )
})

export default Anecdotes