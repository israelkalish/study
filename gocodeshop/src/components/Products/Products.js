import { ProductCard } from "../ProductCard/ProductCard";
import './Products.css'
import {useContext} from "react";
import {MyContext} from '../../MyContext'

export const Products = () => {
    const {productsTo } = useContext(MyContext);

    return(
        <section className="products">
            {productsTo.map((event) => <ProductCard app className="product-card" src={event.image} title={event.title} price={event.price} id={event.id}/>)}
        </section>
    )
}
  