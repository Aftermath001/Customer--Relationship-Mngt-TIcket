import React,{useState} from 'react'
import './entryStyle.css'
import Login from '../../components/login/Login'
import PasswordReset from '../../components/passwordreset/PasswordReset'



const Entrypage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formload, setFormLoad] =useState("login")

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        switch(name){
            case 'email':
                setEmail(value)
                break
            
            case 'password':
                setPassword(value)
                break

            default:
                break
        }

        // console.log (name, value)

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!email || !password){
           return alert("Fill User Credentials");
        }
        console.log(email,password)
    }
    const handleResetOnSubmit = (e) => {
        e.preventDefault();

        if (!email){
           return alert("Enter email");
        }
        console.log(email)
    }
    const switchform = formtype =>{
        setFormLoad(formtype)
    }
  return (
    <div className='entry-page bg-black'>
        {formload === 'login' && 
         <Login
         handleOnSubmit={handleOnSubmit} 
         handleOnChange={handleOnChange}
         switchform ={switchform}
         email={email}
         password={password}
         />}

        {formload === 'reset' &&
        <PasswordReset 
        handleResetOnSubmit={handleResetOnSubmit} 
        handleOnChange={handleOnChange}
        switchform ={switchform}
        email={email}
       
       />}
        
    </div>
  )
}

export default Entrypage