import { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import Book from '../book/Book'




const Home = () => {
  const API_URL = '/api/bookstore/books'
  const [books, setBooks] = useState([])
  
  
  useEffect(() => {
    axios.get(API_URL)
                      .then(function (response) {
                        setBooks(response.data.books)
                      })
                      .catch(
                      (error) => console.log(error)
                      )
  }, [])

  

    
  return (
    <section className='container home-content'>
      <div className='books' >
        {books.map((book) => (
          <Book className='book' key={book._id} book={book}/>
        ))}
      </div>
      
    </section>
  )
}

export default Home