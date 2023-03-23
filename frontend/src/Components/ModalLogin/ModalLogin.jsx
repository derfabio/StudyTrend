import {useState} from 'react'
import {useEffect} from 'react'
import './modalLogin.scss';
import Aos from 'aos';
import 'aos/dist/aos.css' 


const ModalLogin = ({open}) => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

  const[username, setUsername] = useState(null);
  const[password, setPassword] = useState(null);

  const handleInput = (e) => {
    const {id, value} = e.target;
    if(id === "username") {
      setUsername(value);
    }
    if(id === "password") {
      setPassword(value);
    }
  }

  const handleSubmit = () => {
    console.log(username, password);

    if (!username || !password) {
        alert("Invalid input");
    } else {
        const existingUser = {
            "username" : username,
            "password" : password
        };
        
        console.log(existingUser)
        const encodedUserCredentials = window.btoa(existingUser.username + ':' + existingUser.password);
        const requestOptions = {
            method: 'POST',
            headers: {
                authorization : 'Basic ' + encodedUserCredentials
            }
        };
        loginUser(requestOptions);
    }

};

const loginUser = (requestOptions) => {
    fetch(
        'http://localhost:8080/authentication/login',
        requestOptions
    ) 
    .then(response => response.text())
    .then((token) => {
        console.log(token);
        localStorage.setItem("token", token);
        alert(`Successfully logged in. Welcome, ${username}!`);
    })
    .catch((error) => {
        console.log(error)
    })

};
if(!open) return null;



  return (
    <div className="form" data-aos="fade-up">
    <div className="form-body">
        <div className="username">
            <label className="form_label" htmlFor="username">User Name </label>
            <input className="form__input" type="text" onChange = {(e) => handleInput(e)} id="username" placeholder="UserName"/>
        </div>
        <div className="password">
            <label className="form__label" htmlFor="password">Password </label>
            <input className="form__input" type="password" id="password" onChange = {(e) => handleInput(e)} placeholder="Password"/>
        </div>
        <div className="footer">
        <button onClick={()=> handleSubmit()} type="submit" className="btn-login">Login</button>
    </div>
        </div>
</div>
)
}

export default ModalLogin
