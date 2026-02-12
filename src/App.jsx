import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

function App() {

  return (
      <div>
        <Routes>

          <Route path="/" element={<Layout/>}>

            <Route index element = {<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            
          
          <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </div> 
  )
}
export default App
{/*function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}
  /*/ } 
