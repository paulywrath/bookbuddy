import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"

function App() {

  const [token, setToken] = useState(`test`);

  return (
    <>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/auth' element={<Auth setToken={setToken}/>} />
      </Routes>
    </>
  )
}

export default App
