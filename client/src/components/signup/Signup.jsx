import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './signup.css'


const Signup = () => {
  const API_URL = '/api/bookstore/users/'
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    passwordConfirmation:'',
  })

  const {name, email, password, passwordConfirmation} = formData
  const navigate = useNavigate()
  let [alertColorPwd, setAlertColorPwd] = useState('#b7b4bb') 
  let [alertColorConfirmPwd, setAlertColorConfirmPwd] = useState('#b7b4bb') 
  let [alertColorEmail, setAlertColorEmail] = useState('#b7b4bb')

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if(password !== passwordConfirmation){
      setAlertColorPwd('red')
      setAlertColorConfirmPwd('red')
      setAlertColorEmail('#b7b4bb')
    } else {
      setAlertColorPwd('#b7b4bb')
      setAlertColorConfirmPwd('#b7b4bb')
      const userData = {
        name,
        email,
        password,
      }
      
      axios.post(API_URL + 'signup', userData)
      .then((response) => {
            console.log(response.data)
            localStorage.setItem('user', JSON.stringify(response.data))
            localStorage.setItem('name', JSON.stringify(response.data.name))
            navigate('/')
      })
      .catch((error)=>{
            console.log(error.response.data)
            if(error.response.data.error==='User already exists'){
              setAlertColorEmail('red')
            }
          
    })
    }
    
  }

  return (
    <section className='container signup'>
        
        <div className="signup_container">
          <h1 className="signup_title">Create An Account</h1>
          <div className='sub-signup'>
            <p>Create an account for fast checkout, special coupon codes, wishlists, and order history.</p>
          </div>
          <div className="signup-form">
            <form onSubmit={onSubmit} className='signup-form-options'>
              <div className='form-group'>
                <label>Name</label>
                <input type="text" name='name' value={name} placeholder='Your name' onChange={onChange} required/>
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input style={{borderColor:alertColorEmail}} type="email" name='email' value={email} placeholder='Set a valid email' onChange={onChange} required/>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input style={{borderColor:alertColorPwd}} type="password" name='password' value={password} placeholder='Set a password' onChange={onChange} required/>
              </div>
              <div className='form-group'>
                <label>Password Confirmation</label>
                <input style={{borderColor:alertColorConfirmPwd}} type="password" name='passwordConfirmation' value={passwordConfirmation} placeholder='Confirm your password' onChange={onChange} required/>
              </div>
              <div className='check-email'>
                <input type="checkbox" name="check" value='check' />
                <p>Send me emails about new books, authors, and bookstores from Bookshop.</p>
              </div>
              <div>
                <p>By creating an account, you agree to Bookshop’s <Link to='/pages/privacy_notice' className='link-to-pages'>Privacy Notice</Link> and <Link to='/pages/terms_of_use' className='link-to-pages'>Terms of Use</Link>.</p>
              </div>
              <button type='submit' className='btn-form'>Create</button>
              <div >
                or <Link to='/login' className='link-to-pages'>Login as Existing Customer</Link> 
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Signup