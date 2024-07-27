import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"
import BookDetails from "./components/BookDetails"
import Account from "./components/Account"

function App() {

  const [token, setToken] = useState(null);
  console.log(token);

  return (
    <>
      <nav>
        <h1>Your Bookbuddy</h1>
        <section>
          <Link to='/' >Book List</Link>
          
          {
            token ? 
              <Link to='/account' >My Account</Link>:
              <Link to='/auth' >Log In</Link>
          }
        </section>
      </nav>
      
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/auth' element={<Auth setToken={setToken}/>} />
        <Route path ='/books/:id' element={<BookDetails token={token}/>} />
        <Route path ='/account' element={<Account />} />
      </Routes>
    </>
  )
}

export default App
