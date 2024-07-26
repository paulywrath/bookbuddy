import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetails({token}) {
  const {id} = useParams();
  
  const [oneBook, setOneBook] = useState({});

  useEffect(()=>{
    async function getOneBook () {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
        const result = await response.json()
        const oneBookFromAPI = result.book;
        setOneBook(oneBookFromAPI);
      } catch (e) {
        alert(e);
      }
    }
    getOneBook();
  },[])

  const isAvailable = oneBook.available ? `Yes` : `No`;

  async function checkOut () {
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          available: false,
        })
      })
      const result = await response.json();
      console.log(result);
    } catch(e) {
      alert(e);
    }
  }

  return (
    <>
      <img src={oneBook.coverimage} alt="Book cover"></img>
      <p><i>{oneBook.title}</i></p>
      <p>by {oneBook.author}</p>
      <p>{oneBook.description}</p>
      <p>Available: {isAvailable}</p>
      {
        oneBook.available && <button onClick={() => {checkOut()}}>Checkout</button>
      }  
    </>
  )
}