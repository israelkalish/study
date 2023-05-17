import React, { useContext } from 'react'
import './PageOfProduct.css';
import { MyContext } from '../../MyContext';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductFilter } from '../ProductFilter/ProductFilter';

const PageOfProduct = () => {
  const {productsWithData,singlProduct } = useContext(MyContext);
  const event = productsWithData[singlProduct-1]
  console.log(singlProduct)
  return (
    <div className="App">
    <ProductFilter />
    <ProductCard
    className="PageOfProduct"
    id={event.id}
    title={event.title}
    price={event.price}
    src={event.image}
    description={event.description}
    category={event.category}
    rating={event.rating}/>
    {/* 02500348 0737078226 */}
    </div>
  )
}

export default PageOfProduct