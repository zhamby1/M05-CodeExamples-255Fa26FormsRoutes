import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      <Navbar />
    </BrowserRouter>

  )

}

function Navbar(){
  return(
    <nav>
      <ul>
        
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>


      </ul>
    </nav>
  )
}

//now make all out of components we listed
function Home(){
  return <h1>Home</h1>
}

function Products(){
  return <h1>Products</h1>
}

function About(){
  return <h1>About</h1>
}

function NotFound(){
  return <h1>Not Found</h1>
}

export default App;
