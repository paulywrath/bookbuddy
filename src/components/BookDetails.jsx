import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetails() {
  const {id} = useParams();
  
  const [oneBook, setOneBook] = useState({});

  useEffect(()=>{
    async function getOneBook () {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
        const result = await response.json()
        const oneBookFromAPI = result.book;
        setOneBook(oneBookFromAPI);
        console.log(oneBook);
      } catch (e) {
        alert(e);
      }
    }
    getOneBook();
  },[])

  const isAvailable = oneBook.available ? `Yes` : `No`;

  return (
    <>
      <img src={oneBook.coverimage} alt="Book cover"></img>
      <p><i>{oneBook.title}</i></p>
      <p>by {oneBook.author}</p>
      <p>{oneBook.description}</p>
      <p>Available: {isAvailable}</p>
    </>
  )
}