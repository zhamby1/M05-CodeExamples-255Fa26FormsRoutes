import logo from './logo.svg';
import { useState, useEffect, use } from 'react';


function App() {
  const [forecast, setForecast] = useState([{ high:0 }])
  const [zip, setZip] = useState("90210")

  function handleSubmit(event){
    event.preventDefault()
    setZip(event.target.zip.value)
  }

  //we need to grab data form the api and call useEffect to run an asynch fetch request
  useEffect(() =>{
    async function fetchForecast(){
      const url = `https://wp.zybooks.com/weather.php?zip=${zip}`
      const response = await fetch(url)
      if (response.ok){
        const result = await response.json()
        if (result.success){
          setForecast(result.forecast)
        }
      }
    }
    fetchForecast()
  }, [zip])
  return (
    <>
      <h1>Five Day Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input type='number' id='zip' />
        <button type='submit'>Submit</button>
      </form>
      <ol>
        {forecast.map((day, index) =>(
          <li key={index}>
            High: {day.high}, Low: {day.low}, Descr: {day.desc}
          </li>
        ))}
      </ol>
      
    </>
   
   

  )

}



export default App;
