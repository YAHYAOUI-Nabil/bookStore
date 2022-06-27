import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './login.css'

const Login = () => {
  
  const API_URL = '/api/bookstore/users/'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  let [alertColorEmail, setAlertColorEmail] = useState('#b7b4bb') 
  let [alertColorPwd, setAlertColorPwd] = useState('#b7b4bb') 

  const {email, password} = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }

    axios.post(API_URL + 'login', userData)
    .then((response) => {
          console.log(response.data)
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('name', JSON.stringify(response.data.name))
          navigate('/')
    })
    .catch((error)=>{
          console.log(error.response.data)
          if(error.response.data.error==='User does not exist !'){
            setAlertColorEmail('red')
            setAlertColorPwd('red')
          }
          if(error.response.data.error==='Wrong password !'){
            setAlertColorEmail('#b7b4bb')
            setAlertColorPwd('red')
          }
          
    })
    
  }

  return (
    <section className='container login'>
        
        <div className="login_container">
          <h1 className="login-title">Login as Existing Customer</h1>
          <div className="login-form">
            <form onSubmit={onSubmit} className='login-form-options'>
              <div className='formGroup'>
                <label>Email</label>
                <input style={{borderColor:alertColorEmail}} type="email" name='email' value={email} placeholder='Set a valid email' onChange={onChange} required/>
              </div>
              <div className='formGroup'>
                <label>Password</label>
                <input style={{borderColor:alertColorPwd}} type="password" name='password' value={password} placeholder='Set a password' onChange={onChange} required/>
              </div>
              <div className='check-email'>
                <input type="checkbox" name="check" value='check' />
                <p>Remember me.</p>
              </div>
              <div>
                <p>By creating an account, you agree to Bookshop’s <Link to='/pages/privacy_notice' className='link-to-pages'>Privacy Notice</Link> and <Link to='/pages/terms_of_use' className='link-to-pages'>Terms of Use</Link>.</p>
              </div>
              <button type='submit' className='btn-form'>Login</button>
              <div >
                or <Link to='/signup' className='link-to-pages'>Create a new account</Link> | <Link to='/signup' className='link-to-pages'>Forgot Password</Link> ?
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Login