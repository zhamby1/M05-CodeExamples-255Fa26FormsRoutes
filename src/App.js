import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';


function App() {
  return (
    <div className='m-3'>
      <h1 className='display-1'>Boostrap Example</h1>
      <p className='text-primary'>Boostrap constains many CSS classes to use</p>
      <blockquote className='border w-25 p-2 shadow'>
        <p className='fa-4'>Learning Bootstrap is fun</p>
        <footer className='text-muted'>By Zach Hamby</footer>
      </blockquote>
      
    </div>
   

  )

}



export default App;
