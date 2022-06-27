import { useEffect, useState } from 'react'
import axios from 'axios'
import Book from '../../book/Book'
import './ya.css'

const Ya = () => {
  const API_URL = '/api/bookstore/books/category/'
    const [books, setBooks] = useState([])
  
    useEffect(() => {
        axios.get(API_URL+'ya')
                              .then(function (response) {
                                  setBooks(response.data.books)
                              })
                              .catch(
                              (error) => console.log(error)
                              )
    }, [])

  return (
    <section className='container ya-content'>
      <div className='books'>
        {books.map((book) => (
          <Book className='book' key={book._id} book={book}/>
        ))}
      </div>
      
    </section>
  )
}

export default Ya