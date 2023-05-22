import { useState } from 'react';
import './login.css';
import BrandDell from '../../assets/BrandDell';
import GoogleIcon from '../../assets/GoogleIcon';
import { Link } from 'react-router-dom';
import api from "../../api";

function Login() {
  const [count, setCount] = useState(0)
  const loginOk = async () => {
    // TODO Fazer as validações de login -> Sugestão utilizar talz react forms

    await api
      .post("/login", { email: inputEmail, password: inputPassword })
      .catch((res) => {
        setStateError(true);

        setTimeout(() => {
          setStateError(false);
        }, 3000);
      })
      .then((res) => {
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));

        return navigate("/Dell/AllProject");
      });
  };
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
          <input type="text" className="inputEmail"  />
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
