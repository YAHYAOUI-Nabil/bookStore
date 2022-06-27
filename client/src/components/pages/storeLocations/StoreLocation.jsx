import './storeLocation.css'
// import Map from './Map';
import MapPhoto from '../../../assets/GoogleMapTest.webp'


const StoreLocation = () => {
  return (
    <div className='locations_container'>
        <div className="locations-contents">
            <div className="locations_left-section">
                <h3>Get notified of new locations.</h3>
                <div className='locations-form'>
                    <form action="">
                        <div className="form-group">
                            <input type="text" name='name' placeholder='Your name' required/>
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' placeholder='Your email' required/>
                        </div>
                        <button className='locations-form-btn'>NOTIFY ME!</button>
                    </form>
                </div>
                <div className='locations-btn-container'><button className='locations-btn'>Show all locations</button></div>
                
            </div>
            <div className="locations_right-section">
                {/* <Map/> */}
                <img src={MapPhoto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default StoreLocation