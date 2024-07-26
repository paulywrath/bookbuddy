import { useEffect, useState } from "react"

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

  const goToBook = (book) => {
    console.log(`clicked ${book.title}`);
  }

  return (
    <>
      <ul>
        {
          books.map((book) => {
            return <li onClick={() => { goToBook(book)}} key={book.id}><i>{book.title}</i> by {book.author}</li>
          })
        }
      </ul>
    </>
  )
}

export default Home