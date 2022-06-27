import { Link } from 'react-router-dom'
import './book.css'



const Book = ({book}) => {
  
  return (
    <div className='book'>
      
        <Link  to={`/book/${book._id}`}><div className='book-image'><img src={book.imageUrl} alt=""/></div></Link>
      
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <h3>DT {book.price}.00</h3>
      <Link to={`/book/${book._id}`}><button className='btn-cart'>ADD TO CART</button></Link>
    </div>
  )
}

export default Book