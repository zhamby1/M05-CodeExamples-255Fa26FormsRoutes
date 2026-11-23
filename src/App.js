import logo from './logo.svg';
import { useState } from 'react'; 


function RegistrationForm() {
   const [username, setUsername] = useState("");

   function handleSubmit(event) {
      event.preventDefault();
      alert(`Username: ${username}`);
   }

   return (
      <form onSubmit={handleSubmit}>
         <p>
            <label htmlFor="username">
               Username?
            </label>
            <input 
               type="text" 
               id="username"
               value={username}
               onChange={(e) => setUsername(e.target.value)} />
         </p>
         <input type="submit" value="Register" />
      </form>
   );
}

function App() {
  return (
    <RegistrationForm />

  )

}

export default App;
