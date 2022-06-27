import './header.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiShoppingBasketFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import Logo from '../../assets/bookstore_inline_logo.jpg'
import {Link, useNavigate} from 'react-router-dom'


const Header = () => {
  const username = localStorage.getItem('name') ? localStorage.getItem('name').slice(1,localStorage.getItem('name').length-1) : null
 
  
  const navigate = useNavigate()
  const onLogout = ()=>{
    localStorage.clear();
    navigate('/')
  }
  return (
    <header>
      <div className="container header_container">

        <div className="upper-header">

          <div className="header-logo">
            <Link to='/'><img src={Logo} alt="logo" /></Link>
          </div>
          <div className="header-search">
            <form action="" className='header-form'> 
              <input className="form-input" type="text" name='text' placeholder='Search books, authors, ISBNs' required/>
              <button type='submit' className="form-button"><AiOutlineSearch/></button>
            </form>
          </div>
          
          <div className="header-options">
            <div className="header-user-option">
              <div className="header-option store-location" >
                <Link to='store_locations'>Choose a BookStore</Link>
              </div>
              <div className="header-option">
                {username ? 
                <div className='dropdown'>
                  <Link className="dropbtn" to='/my_account'>{username}</Link>
                  <div className="dropdown-content">
                    <button onClick={onLogout}>Logout</button>
                  </div>
                </div>
                   : <Link to='/login'>Sign in</Link>}
              </div>
              <div className="header-basket">
                <Link to='cart'><RiShoppingBasketFill/></Link>
              </div>
            </div>
          </div>

        </div>

        <div className="header-nav">
          <div className="header-nav-content">
            <ul className="nav-header-lists">
              <li className="link-header-option"><Link to='/gift_cards'>Gift Cards</Link></li>
              <li className="link-header-option"><Link to='/category/best_sellers'>Best Sellers</Link></li>
              <li className="link-header-option"><Link to='/category/new_releases'>New Releases</Link></li>
              <li className="link-header-option"><Link className="dropbtn" to='/category/fiction'>Fiction</Link></li>
              <li className="link-header-option"><Link to='/category/nonFiction'>Nonfiction</Link></li>
              <li className="link-header-option"><Link to='/category/ya'>YA</Link></li>
              <li className="link-header-option"><Link to='/category/kids'>Kids</Link></li>
              <li className="link-header-option"><Link to='/category/en_arabic'>En Arabic</Link></li>
              <li className="link-header-option"><Link to='/category/games_and_puzzles'>Games & Puzzles</Link></li>
            </ul>
          </div>
        </div>
        

        {/* header search for mobile */}
        <div className="header-nav-responsive">
          <input type="checkbox" id='check' />
          <label htmlFor="check"><GiHamburgerMenu id='btn-burger'/></label>
          <div className="header-search-responsive">
            <form action="" className='header-form'> 
              <input className="form-input" type="text" name='text' placeholder='Search books, authors, ISBNs' required/>
              <button type='submit' className="form-button"><AiOutlineSearch/></button>
            </form>
          </div>
          <div className="responsive-menu">
            <div className="responsive-menu-content">
              <ul className="responsive-menu-list">
                <li className="link-header-option"><a href="/gift_cards">Gift Cards</a></li>
                <li className="link-header-option"><a href="/category/best_sellers">Best Sellers</a></li>
                <li className="link-header-option"><a href='/category/new_releases'>New Releases</a></li>
                <li className="link-header-option"><a href='/category/fiction'>Fiction</a></li>
                <li className="link-header-option"><a href='/category/nonFiction'>Nonfiction</a></li>
                <li className="link-header-option"><a href='/category/ya'>YA</a></li>
                <li className="link-header-option"><a href='/category/kids'>Kids</a></li>
                <li className="link-header-option"><a href='/category/en_arabic'>En Arabic</a></li>
                <li className="link-header-option"><a href='/category/games_and_puzzles'>Games & Puzzles</a></li>
              </ul>
            </div>
          </div>
        </div>
       
        
          
        
      </div>
    </header>
  )
}

export default Header