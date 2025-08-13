import 'swiper/css'
import './index.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ShoppingCar from "./pages/ShoppingCar.jsx";
import Menu from './components/Menu';

export default function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/Carrinho" element={<ShoppingCar />}/>
			</Routes>
		</>
	)
}

