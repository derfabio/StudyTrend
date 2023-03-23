import { useState } from "react";
import { useEffect } from "react";
import './modalRegistration.scss';
import Aos from 'aos';
import 'aos/dist/aos.css' 


const ModalRegistration = ({open, setOpen}) => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

const [username, setUsername] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);


const handleInputChange = (e) => {
    const {id, value} = e.target;
    if (id === "username") {
        setUsername(value);
    }
    if (id === "email") {
        setEmail(value);
    }
    if (id === "password") {
        setPassword(value);
    }
}

const handleSubmit = () => {
    console.log(username, email, password);
    if (!username || !email || !password) {
        alert("Invalid input");
    } else {
        const newUser = {
            "username" : username,
            "email" : email,
            "password" : password
        }
        console.log(newUser)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        registerUser(requestOptions);
    }
};

const registerUser = (requestOptions) => {
    fetch(
        'http://localhost:8080/authentication/register',
        requestOptions
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            alert(`Successfully registered. Welcome, ${username}!`);
            setOpen(false)
        }
    })
}

    if (!open) return null
    return (
        <div className="form"  data-aos="fade-up">
            <div className="form-body">
                <div className="username">
                    <label className="form_label" htmlFor="username">User Name </label>
                    <br></br>
                    <input className="form__input" type="text" onChange = {(e) => handleInputChange(e)} id="username" placeholder="UserName"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <br></br>
                    <input className="form__input" type="email" id="email" onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <br></br>
                    <input className="form__input" type="password" id="password" onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div class="footer">
                <button onClick={()=> handleSubmit()} type="submit" className="btn-registration">Register</button>
                <button onClick={() => setOpen(false)} type="submit" className="btn-registrationClose">Close</button>
            </div>
                </div>
            
        </div>
    )
}

export default ModalRegistration;