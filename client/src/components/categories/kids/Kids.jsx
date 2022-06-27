import { useEffect, useState } from 'react'
import axios from 'axios'
import Book from '../../book/Book'
import './kids.css'

export const Kids = () => {
  const API_URL = '/api/bookstore/books/category/'
    const [books, setBooks] = useState([])
  
    useEffect(() => {
        axios.get(API_URL+'kids')
                                .then(function (response) {
                                    setBooks(response.data.books)
                                })
                                .catch(
                                (error) => console.log(error)
                                )
    }, [])
  return (
    <section className='container kids-content'>
      <div className='books'>
        {books.map((book) => (
          <Book className='book' key={book._id} book={book}/>
        ))}
      </div>
      
    </section>
  )
}
