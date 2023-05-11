import { useState } from 'react'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
     <div class="body">

      <header class="header">      
      <div class="vetor">

        
      
        <div class="logotipo">
        </div>

      </div>
      </header>

      <div class='emailPassword'>

        <div class="email">
        <p>Your email address: </p>
        <input type="text" class="inputEmail"  />
        </div>

        <div class="Password">
          <p>Choose password:</p>
          <input type="text" class="inputPassword"  />
        </div>
        </div>
        
        <div class="buttons">
        <button class="button">Continue</button>
        <button class="button2">Sign in with google</button>
        <button class="button3">Sign in with SSO</button>
        </div>
      
      
      
      

      

      </div>
      
   
  )
}

export default App
