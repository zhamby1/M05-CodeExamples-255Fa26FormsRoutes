import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/products/:productId" element={<ProductDetails />} />
        
      </Routes>
      
    </BrowserRouter>

  )

}

const products = [
   { id: 111, name: "Blaze", desc: "About Blaze..." },
   { id: 222, name: "Comet", desc: "About Comet..." },
   { id: 333, name: "Doodle", desc: "About Doodle..." }
];

function ProductDetails() {
   const { productId } = useParams();
   const product = products.find(prod => prod.id == productId);

   return (      
      <>
         <h1>Product Details</h1>
         <p>Name: {product.name}</p>
         <p>Description: {product.desc}</p>
      </>
   );
}
export default App;
