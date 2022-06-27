import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import PrivacyNotice from './components/pages/privacyNotice/PrivacyNotice'
import TermsOfUse from './components/pages/termsOfUse/TermsOfUse'
import Cart from './components/pages/cart/Cart'
import Account from './components/pages/account/Account'
import GiftCards from './components/giftCards/GiftCards'
import Ya from './components/categories/ya/Ya'
import NonFiction from './components/categories/nonFiction/NonFiction'
import Fiction from './components/categories/fiction/Fiction'
import { Kids } from './components/categories/kids/Kids'
import GamesAndPuzzles from './components/categories/gamesAndPuzzles/GamesAndPuzzles'
import EnArabic from './components/categories/enArabic/EnArabic'
import BestSellers from './components/categories/bestSellers/BestSellers'
import NewReleases from './components/categories/newReleases/NewReleases'
import StoreLocation from './components/pages/storeLocations/StoreLocation'
import OneBook from './components/pages/oneBook/OneBook'



const App = () => {
  return (
    <>
        <BrowserRouter>
          <div className='container app_container'>
            <Header/>
            
              <Routes>
                <Route path='*' element={<Home/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/book/:id' element={<OneBook />} />
                <Route path='/my_account' element={<Account />} />
                <Route path='/store_locations' element={<StoreLocation />} />
                <Route path='/gift_cards' element={<GiftCards />} />
                <Route path='/category/best_sellers' element={<BestSellers />} />
                <Route path='/category/new_releases' element={<NewReleases />} />
                <Route path='/category/fiction' element={<Fiction />} />
                <Route path='/category/nonFiction' element={<NonFiction />} />
                <Route path='/category/ya' element={<Ya />} />
                <Route path='/category/kids' element={<Kids />} />
                <Route path='/category/en_arabic' element={<EnArabic />} />
                <Route path='/category/games_and_puzzles' element={<GamesAndPuzzles />} />
                <Route path='/pages/privacy_notice' element={<PrivacyNotice />} />
                <Route path='/pages/terms_of_use' element={<TermsOfUse />} />
              </Routes>
            
            
            <Footer/>
          </div>
        </BrowserRouter>
        <ToastContainer/>
        
        
        
    </>
  )
}

export default App