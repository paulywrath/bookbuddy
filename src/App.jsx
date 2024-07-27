import { useState } from "react"
import { useNavigate, Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"
import BookDetails from "./components/BookDetails"
import Account from "./components/Account"

function App() {

  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const logOut = () => {
    setToken(null);
    navigate('/');
  }

  return (
    <>
      <nav>
        <h1>My Bookbuddy</h1>
        <section>
          <Link to='/' >Book List</Link>
          
          {
            token ? 
              <>
                <Link to='/account' >My Account</Link>
                <button id="log-out" onClick={logOut}>Log Out</button>
              </>:

              <Link to='/auth' >Log In</Link>
          }
        </section>
      </nav>
      
      <main>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/auth' element={<Auth setToken={setToken}/>} />
          <Route path ='/books/:id' element={<BookDetails token={token}/>} />
          <Route path ='/account' element={<Account token={token}/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
