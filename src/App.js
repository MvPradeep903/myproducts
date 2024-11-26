import logo from './logo.svg';
import './App.css';
import ProductDetails from './features/ProductDetails';
import { Outlet } from 'react-router-dom';
import Products from './features/Products';


function App() {
  return (
    <div>
      {/* <Products/> */}
      <Outlet/>
    </div>
  );
}

export default App;
