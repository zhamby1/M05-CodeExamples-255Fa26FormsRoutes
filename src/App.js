import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';


function AlertBox(){
  const boxstyle = {
    padding: "12px 16px",
    backgroundColor: "#fee2e2",
    color: "#9891b1b",
    borderRadius: 8
  }
  return(
    <div style={boxstyle}>Something Went Wrong</div>
  )
}

function App() {
  return (
    <AlertBox />
   

  )

}



export default App;
