import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Home() {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    async function getBooks () {
      try {
        const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        const result = await response.json();
        const booksFromAPI = result.books;
        setBooks(booksFromAPI);
      } catch (e) {
      alert(e);
      }
    }
    getBooks();
  },[])

  const navigate = useNavigate();

  const goToBook = (book) => {
    navigate(`/books/${book.id}`)
  }

  return (
    <section id="books-on-homepage" >
        {
          books.map((book) => {
            return (
              <section onClick={() => { goToBook(book)}} key={book.id}>
                <img src={book.coverimage} alt="Book cover"></img>
                <p><i>{book.title}</i></p>
                <p>by {book.author}</p>
              </section>
            )
          })
        }
    </section>
  )
}

export default Home