import { useState } from 'react'
import './login.css'




function Login() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">

      <header className="header">
        <div className="vetor">

          <div className="logotipo">
          </div>

        </div>
      </header>

      <div className='emailPassword'>

        <div className="email">
          <p>Your email address: </p>
          <input type="text" className="inputEmail" />
        </div>

        <div className="Password">
          <p>Choose password:</p>
          <input type="text" className="inputPassword" />
        </div>
      </div>

      <div className="buttons">
        <button className="button">Continue</button>
        <button className="button2">Sign in with google</button>
        <button classNames="button3">Sign in with SSO</button>
      </div>

    </div>
  )
}

export default Login
