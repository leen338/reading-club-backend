import './section3.css';
import Book1 from './images/download.jpg';
import { useEffect, useState } from 'react';
export default function Sec4() {
  const [books, setBooks] = useState([]);

  useEffect(() => {

  const fetchBooks = async () => {

    try {

      const response = await fetch(
        'http://localhost:5000/api/books',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('token')
          }
        }
      );

      const data = await response.json();

      console.log(data);

      setBooks(data);

    } catch (error) {

      console.error(error);

    }

  };

  fetchBooks();

}, []);

  return (<>
   
   <div className="sec33">
    <div className="s33">
        {Array.isArray(books) && books.map((book) => (

          <div className="card" key={book._id}>

            <img
              src={Book1}
              className="card-img-top card111"
              alt={book.title}
            />

            <div className="card-body">

              <h5 className="card-title">
                {book.title}
              </h5>

              <p className="card-text card111">
                {book.description}
              </p>

              <a href="#" className="btn btn-primary btn1">
                Read More
              </a>

            </div>
          </div>

        ))}
        </div>
        </div>
</>);
}