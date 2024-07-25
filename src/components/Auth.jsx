import { useState } from "react"

function Auth() {

  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <form>
        {
          showRegister ?
          <>
            <label>
              First Name: <input />
            </label>

            <label>
              Last Name: <input />
            </label>
          </>:
          null
        }

        <label>
          Email: <input type="email"/>
        </label>

        <label>
          Password: <input type="password"/>
        </label>
        
        {
          showRegister ?
            <>
              <button>Register</button>
              
              <p>Already have an account?</p>
              <button onClick={() => {setShowRegister(false)}}>Go to Log In</button>
            </>
            :
            <>
              <button>Log In</button>

              <p>Don't have an account?</p>
              <button onClick={() => {setShowRegister(true)}}>Make an Account</button>
            </>
        }
      </form>
    </>
  )
}

export default Auth