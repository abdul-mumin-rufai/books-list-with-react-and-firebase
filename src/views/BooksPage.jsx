// In this project the books ie the state is coming from the booksSlice(redux)/ firestore
import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, fetchBooks } from '../store/booksSlice.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
  const pageTitle = "📖 Rufai's, Book List with Router, Redux & Firebase.";

  const bookStatus = useSelector(selectBooks).status;


  //useEffect because react can'n handle HTTP request. 
  // the status will prevent the fetchBook to run in infinite loop
  useEffect(() => {
    if (bookStatus == 'idle') {
      dispatch(fetchBooks());
    }
  }, []);


  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />
        <div className="books-container">
          {books.length ?

            <div className="books-list">

              {books.map(book =>
                <Book key={book.id} book={book} />
              )}

            </div>
            : bookStatus == 'loading' ?
              <div>
                <p>Loading...</p>
              </div> :
              <div>
                <p>Your book list is empty. <Link to='/add-book'>Click here</Link> to add a new book.</p>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default BooksPage
