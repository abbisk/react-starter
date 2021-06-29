import React from 'react';
import './EmailLogin.css';
import { MailOutlined } from '@ant-design/icons';
import { VscLock } from 'react-icons/fa';



const EmailLogin = () => {
    const setActiveLink = e => {
        // easier for me, you can change with getElementById or getElementByClassName
        const links = document.getElementsByTagName("a"); 
    
        Array.from(links).forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
      };

    return (
        <>

        
        <form action="">
            
            <div className="container">
                <div className="navbar">
                    <a href="#" onClick={setActiveLink} className="login">
                        Login
                    </a>
                    <a href="#" onClick={setActiveLink} className="create-account">
                        Create an account
                    </a>
                
                </div>
                <label htmlFor="usename" className="username">Email</label>
                <input type="text" name="name" className="user-input" />

                <label htmlFor="password" className="password">Password</label>
                <input type="text" name="Submit" className="password-input"/>

                <div>
                    <input type="checkbox" name="Submit" className="checkbox"/>
                    <label for="check"> Remind Me?</label>
                    <label className="lastpass"> Last Password?</label>
                    
                </div>
                
                <input type="submit" value="Login" className="submit-button"/>
                <MailOutlined  className="email-icon"/>
                {/* <VscLock /> */}

            </div>
            
        
        </form>

        </>

        

    );
};

export default EmailLogin;