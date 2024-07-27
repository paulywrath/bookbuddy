import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Auth({setToken}) {

  const [showRegister, setShowRegister] = useState(false);

  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  
  const navigate = useNavigate();

  const register = async() => {
    try {
      const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password
        })
      });
      const result = await response.json();
      alert(result.message);
      setToken(result.token);
      if (result.message === `Registration successful`) {
        navigate('/');
      }
    } catch(e) {
      alert(`Something went wrong. Please check your entry and try again.`);
    }
  }

  const logIn = async() => {
    try {
      const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const result = await response.json();
      alert(result.message);
      setToken(result.token);
      if (result.message === `Login successful!`) {
        navigate('/');
      }
    } catch(e) {
      alert(`Something went wrong. Please check your entry and try again.`);
    }
  }

  return (
    <>
      <form>
        {
          showRegister ?
          <>
            <label>First Name: 
              <input 
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>

            <label>Last Name: 
              <input 
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
          </>:
          null
        }

        <label>Email: 
          <input 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
        </label>

        <label>Password: 
          <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
        </label>
        
        {
          showRegister ?
            <>
              <button onClick={() => {register()}}>Register</button>
              
              <p>Already have an account?</p>
              <button onClick={() => {setShowRegister(false)}}>Go to Log In</button>
            </>
            :
            <>
              <button onClick={() => {logIn()}}>Log In</button>

              <p>Don't have an account?</p>
              <button onClick={() => {setShowRegister(true)}}>Make an Account</button>
            </>
        }
      </form>
    </>
  )
}

export default Auth