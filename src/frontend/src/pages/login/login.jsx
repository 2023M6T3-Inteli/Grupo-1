import { useState } from 'react';
import './login.css';
import BrandDell from '../../assets/BrandDell';
import GoogleIcon from '../../assets/GoogleIcon';
import { Link } from 'react-router-dom';


function Login() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">

      <header className="headerl">
          <div className="vetor">
            <div className="logotipo">
              <BrandDell></BrandDell>
            </div>
          </div>
      </header>

      <div className='emailPassword'>
        <div className="email">
          <p className='emailText'>Your email address: </p>
          <input type="text" className="inputEmail" />
        </div>

        <div className="Password">
          <p className='passwordText'>Choose password:</p>
          <input type="text" className="inputPassword" />
        </div>
      </div>

      <div className="buttons">
        <button className="button"><Link to="/Projects" className="linkContinue">Continue</Link>
          </button>
        <button className="button2"><GoogleIcon></GoogleIcon>Sign in with google</button>
        <button className="button3">Sign in with SSO</button>
      </div>

    </div>
  )
}

export default Login;
