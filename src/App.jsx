import './App.scss';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import Categories from './pages/categories';
import ProductsPage from './pages/products';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/products/:category_name' element={<ProductsPage />} />
    </Routes>
  );
}

export default App;