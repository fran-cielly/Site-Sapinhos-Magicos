import { Link } from 'react-router-dom';
import shop from '../assets/shopping-basket.png'

export default function Menu({}){
    return(
        <header className="fixed w-full h-1/12 z-40 bg-(--my-purple)">
            <Link to="/Carrinho" className="space-x-8">
                <img
                    src={shop}
                    alt="Ir para o carrinho de compras"
                    className="w-[60px] h-auto float-right mr-[25px] mt-[5px]"
                />
            </Link>
        </header>
    )
}