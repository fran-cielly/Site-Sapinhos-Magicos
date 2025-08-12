import 'swiper/css'
import './index.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import Slider from './components/Slider'

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Menu no topo */}
			<header className="fixed w-full h-1/12 bg-(--my-purple)">
				<nav className="space-x-8">
					aa
				</nav>
			</header>
			<main className="flex-grow flex flex-col">
				<section id="slider" className="flex-grow h-[500px] pr-[150px] pl-[150px] bg-(--my-blue) flex items-center">
					<Slider />
				</section>

				<section className="flex-grow mr-[300px] ml-[300px] mt-[50px]">
					<section className='flex justify-end'>
						<label for="categories">Buscar por:</label>
						<select name="Categorias de produtos">
							<option value="">-- Categorias de produtos--</option>
							<option value="maca">Maçã</option>
							<option value="banana">Banana</option>
							<option value="morango">Morango</option>
							<option value="abacaxi">Abacaxi</option>
						</select>
					</section>
					<section id="produtos" className="grid grid-cols-4 gap-x-[30px] gap-y-[30px] mt-[25px]">
						<div>a</div>
						<div>a</div>
						<div>a</div>
						<div>a</div>
						<div>a</div>
						<div>a</div>
						<div>a</div>
						<div>a</div>
						<div>a</div>
					</section>
				</section>
			</main>
			<footer>a</footer>
		</div>
	)
}

export default App
