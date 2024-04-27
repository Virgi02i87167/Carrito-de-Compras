import { useId, useState } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters";

export function Filters(){

    const {filters,setFilters} = useFilters();

    // const [minPrice, setMinPrice] = useState(0);

    //generar dos ids
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangePrice = (event) =>{
        // setMinPrice(event.target.value);

        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategroy = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filtros">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="category" id={categoryFilterId} onChange={handleChangeCategroy}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptos</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}