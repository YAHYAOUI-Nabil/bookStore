import './cart.css'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Cart = () => {
  const username = localStorage.getItem('name') ? localStorage.getItem('name').slice(1,localStorage.getItem('name').length-1) : null
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!username){
      navigate('/login')
    }
  })
  return (
    <div className='cart_container'>
      <div className='cart-content'>
        <h1>Welcome {username} 😊</h1>
        <h4>Your cart is empty! go to <Link style={{color:'red'}} to='/'>home</Link> to pick up your favorite books and enjoy reading.</h4>

      </div>
    </div>
  )
}

export default Cart