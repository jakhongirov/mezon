import './App.scss';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import Categories from './pages/categories';
import ProductsPage from './pages/products';
import { useState } from 'react';

function App() {
	const [lang, setLang] = useState('ru');
	return (
		<Routes>
			<Route path='/' element={<HomePage lang={lang} setLang={setLang} />} />
			<Route
				path='/contact'
				element={<ContactPage lang={lang} setLang={setLang} />}
			/>
			<Route
				path='/about'
				element={<AboutPage lang={lang} setLang={setLang} />}
			/>
			<Route
				path='/categories'
				element={<Categories lang={lang} setLang={setLang} />}
			/>
			<Route
				path='/products/:category_name'
				element={<ProductsPage lang={lang} setLang={setLang} />}
			/>
		</Routes>
	);
}

export default App;
