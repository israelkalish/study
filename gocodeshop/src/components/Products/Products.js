import { ProductCard } from "../ProductCard/ProductCard";
import './Products.css'

const productsWithData = [1,2,3,4,5,6,7,8,9,10]

export const Products = () => {
    return(
        <section className="products">
            {productsWithData.map(() => <ProductCard/>)}
        </section>
    )
}
  