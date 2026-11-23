import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import "./welcome.css"

function Welcome(){
  return <p className='styled-paragraph'>Hello and Welcome</p>
}

function App() {
  return (
   
    <Welcome />

  )

}



export default App;
