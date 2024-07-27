import { useEffect, useState } from "react"

export default function Account({token}) {
  
  const [user, setUser] = useState({});

  async function getUser () {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      const result = await response.json();
      setUser(result);
    } catch(e) {
      alert(e);
    }
  }

  useEffect(()=>{ getUser();},[])
  
  async function returnBook (book) {
    try {
      await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${book.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      getUser();
    } catch(e) {
      alert(e);
    }
  }

  return (
    <section className="account-and-auth">
      <h2 id="my-account">My Account</h2>
      
      <ul>
        <li>Name: {user.firstname} {user.lastname}</li>
        <li>Email: {user.email}</li>
      </ul>

      <h3>Books checked out</h3>

      {
        user.books ?
          <ul>
            {
              user.books[0] ?
              user.books.map((book) => {
                return (
                  <>
                      <li key={book.id}><i>{book.title}</i> by {book.author}</li>
                      <button onClick={() => { returnBook(book)}}>Return</button>
                    </>
                  )
                }):
                <li>None</li>
            }
          </ul>:
        null
      }
    </section>
  )
}
