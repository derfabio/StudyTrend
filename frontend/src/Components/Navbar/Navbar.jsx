import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './navbar.scss';
import {GrWorkshop} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {FiShoppingCart} from 'react-icons/fi'
import ModalLogin from '../ModalLogin/ModalLogin';
import ModalRegistration from '../ModalRegistration/ModalRegistration';


 const Navbar = () => {

    const [active, setActive] = useState('navBar');
    const userFirstName = localStorage.getItem('username')
    const [user, setUser] = useState(false)
    const[openModalLogin, setOpenModalLogin] = useState(false);
    const[openModalRegister, setOpenModalRegister] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(userFirstName) {
            setUser(userFirstName)
        };
    }, [userFirstName, user]);

    function showNav() {
        setActive('navBar activeNavbar');
    }

    function closeNav() {
        setActive('navBar');
    }
    
    function handleSignOut(){
       localStorage.clear();
    }

    function hadleUserPageClick() {
        navigate("/userpage");
    }

    
    return (
   <section className='navbarSection'>
    <header className='header flex'>

        <div className='logoDiv'> 
            <a href="#" className='logo flex'>
                <h1><GrWorkshop className="icon"/> Workshops. </h1>
            </a>
        </div>

        
        <div className={active}>
            <ul className='navLists flex'>
                <li className="navItem">
                    <a href="/" className='navLink'>Home</a>
                </li>
                {userFirstName ? (
                    <><li className='navItem'>
                                <button className='btn' onClick={() => hadleUserPageClick()}>  Hello, {user}</button>
                        </li>
                            <li className='navItem'>
                                    <a className="navLink" onClick={() => handleSignOut()} href="/">Logout</a>
                            </li>
                            <li className='navItem' >
                                <button className='btn'>  <FiShoppingCart className='icon'/> <a href="#"> Cart</a></button>
                            </li>
                    </>    
                ) : (
                
                <><li className="navItem">
                                    <a onClick={() => setOpenModalLogin(!openModalLogin)} href="#" className='navLink'>Login</a>
                                    <ModalLogin open={openModalLogin} setOpen={setOpenModalLogin} /></li>
                                    <li className="navItem">
                                        <a onClick={() => setOpenModalRegister(!openModalRegister)} href="#" className='navLink'>Registration</a>
                                        <ModalRegistration open={openModalRegister} setOpen={setOpenModalRegister} />
                                    </li></>
                )}

                </ul>

                <div onClick={closeNav} className='closeNavbar'>
                    <AiFillCloseCircle className="icon" />
                </div>
        </div>
        <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots className="icon" />
        </div>
    </header>
   </section>
  )
}

export default Navbar