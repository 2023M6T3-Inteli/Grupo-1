import { useState } from 'react'
import './StartPage.css'
import { Link } from 'react-router-dom';

function StartPage(){
    const [count, setCount] = useState(0)
    
    return(
    <div className="bodySP">

        <header className="headerSP">
          <div className="vetorSP">
  
            <div className="logotipoSP">
            </div>
  
          </div>
        </header>

        <div className='textSP'>
            <div className="titleSP">DellGenius</div>
            <div className="subtitleSP">A platform that connects <br></br>real projects to real people</div>
        </div>

       <div className='containerSP'>
       <button className="buttonSP">
              <Link to="/Login" className="linkSP">Login</Link>
       </button>
       </div>
    
    </div>
    )
}
export default StartPage