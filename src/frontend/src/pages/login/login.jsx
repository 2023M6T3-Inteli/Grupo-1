import { useState } from 'react';
import './login.css';
import BrandDell from '../../assets/BrandDell';
import GoogleIcon from '../../assets/GoogleIcon';
import { Link,useNavigate } from 'react-router-dom';
import api from '../../../api.js';

function Login() {
  const [count, setCount] = useState(0);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate()

  const loginOk = async () => {
    // TODO: Fazer as validações de login -> Sugestão utilizar talz react forms
    try {
      const response = await api.post("/login", {
        email: inputEmail,
        password: inputPassword,
      });

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/Projects");
    } catch (error) {
      console.error(error);
      setStateError(true);

      setTimeout(() => {
        setStateError(false);
      }, 3000);
    }
  };

  return (
    <div className="body-login">
      <header className="headerl">
        <div className="vetor">
          <div className="logotipo">
            <BrandDell></BrandDell>
          </div>
        </div>
      </header>

      <div className="emailPassword">
        <div className="email">
          <p className="emailText">Your email address: </p>
          <input
            type="text"
            className="inputEmail"
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>

        <div className="Password">
          <p className="passwordText">Choose password:</p>
          <input
            type="text"
            className="inputPassword"
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="buttons">
        <button className="button" onClick={loginOk}>
          Continue
        </button>
        <button className="button2">
          <GoogleIcon></GoogleIcon>Sign in with google
        </button>
        <button className="button3">Sign in with SSO</button>
      </div>
    </div>
  );
}

export default Login;