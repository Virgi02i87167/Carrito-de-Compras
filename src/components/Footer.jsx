import { useFilters } from '../hooks/useFilters';
import './Footer.css';
import { useCart } from '../hooks/useCart';

export function Footer (){
    const {filters} = useFilters();
    const {cart} = useCart();
    
    return(
        <footer className="footer">
            <h4><span>Virgilio Hernandez</span></h4>
            <h5>© Mundo Mágico Tienda Online</h5>
        </footer>
    )
}