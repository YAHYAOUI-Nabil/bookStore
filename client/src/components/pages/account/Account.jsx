import './account.css'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Account = () => {
  const username = localStorage.getItem('name') ? localStorage.getItem('name').slice(1,localStorage.getItem('name').length-1) : null
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!username){
      navigate('/login')
    }
  })
  return (
    <div className='account_container'>
      <div className='account-content'>
        <h1>Welcome {username} 😊</h1>
        <h4>We are happy for having you among us. We hope that you already found what you are looking for, otherwise,
            please feel free to send us your feedback and share your experience with us to provide you your favorite books
            and to make our BookStore better for the good of all.
        </h4>
        <h5>🧰 <Link style={{color:'red', cursor:'pointer'}} to='/'>Continue booking</Link> 🧰</h5>
      </div>
    </div>
  )
}

export default Account