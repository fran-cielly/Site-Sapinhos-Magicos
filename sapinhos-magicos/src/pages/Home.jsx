import Slider from "../components/Slider.jsx"
import ProductList from "../components/ProductList.jsx"

export default function Home({}){
    return(
        <div className="min-h-screen flex flex-col">
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
						</select>
					</section>
					
					<ProductList />
				
				</section>
			</main>
			<footer>a</footer>
			
		</div>
    )
}