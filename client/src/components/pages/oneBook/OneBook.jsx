import { useEffect, useState } from 'react'
import axios from 'axios'
import './oneBook.css'
import { useParams } from 'react-router-dom'

const OneBook = () => {
    const params = useParams()
    const API_URL = `/api/bookstore/books/${params.id}`
    console.log(API_URL)
    const [book, setBook] = useState({})

    useEffect(() => {
        axios.get(`/api/bookstore/books/${params.id}`)
                          .then(function (response) {
                            setBook(response.data.book)
                            console.log(response.data.book)
                          })
                          .catch(
                          (error) => console.log(error)
                          )
      }, [])
  return (
    <div className='one-book_container'>
        <div className="one-book-content">
            <div className="one-book-image">
                <img src={book.imageUrl} alt="" />
            </div>
            <div className="one-book-description">
                <h2>Title : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>{book.title}</small></h2>
                <h2>Author : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>{book.author}</small></h2>
                <h2>Description : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>{book.description}</small></h2>
                <h2>Details : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>{book.details}</small></h2>
                <h2>Format : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>{book.format}</small></h2>
                <h2>Category : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>{book.category}</small></h2>
                <h2>Price : <small style={{fontSize:'1.5rem', fontWeight:'300'}}>DT {book.price}.00</small></h2>
            </div>
        </div>
    </div>
  )
}

export default OneBook