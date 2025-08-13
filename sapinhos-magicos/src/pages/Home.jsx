import Slider from "../components/Slider.jsx"
import ProductList from "../components/ProductList.jsx"

export default function Home({}){
    return(
        <div className="flex flex-col">
			<main className="flex-grow flex flex-col">
				
				<Slider />

				<section className="flex flex-grow w-3/4 items-center flex-col">
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