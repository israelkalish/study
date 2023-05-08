import { ProductCard } from "../ProductCard/ProductCard";
import './Products.css'
import {useState, useEffect } from "react";

export const Products = () => {

    const retrievingProductsWithAllTheDetails = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProductsWithData(data)
        } catch(err){
            console.log(err)
        }
    }
    const [productsWithData,setProductsWithData] = useState([])
    useEffect(() => {
        retrievingProductsWithAllTheDetails()
    },[])

    return(
        <section className="products">
            {productsWithData.map((event) => <ProductCard src={event.image} title={event.title} price={event.price}/>)}
        </section>
    )
}
  