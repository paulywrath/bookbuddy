import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"
import BookDetails from "./components/BookDetails";

function App() {

  const [token, setToken] = useState(``);

  return (
    <>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/auth' element={<Auth setToken={setToken}/>} />
        <Route path ='/books/:id' element={<BookDetails token={token}/>} />
      </Routes>
    </>
  )
}

export default App
