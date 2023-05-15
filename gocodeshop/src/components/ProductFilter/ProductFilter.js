import './ProductFilter.css'
import { CollectionSort } from '../CollectionSort/CollectionSort';
import { Button } from '../Button/Button';
import { sortBy } from "../../data/data";
import {MyContext} from '../../MyContext'
import { useContext, useState,useEffect } from 'react'
import { MyCart } from '../MyCart/MyCart';

export const ProductFilter = () => {
    
    const {categories,newCategories,productsTo,myCartArr } = useContext(MyContext);

  return(
      <nav className="product-filter">
          <h1>Jackets</h1>
          <div className="sort">
              <CollectionSort arr={categories} name={`Filter by`} onChange={newCategories}/>
              <CollectionSort arr={sortBy} name={`Sort by`} onChange={(e)=>console.log(e.target.value)}/>
              <div className="MyCart">
                <Button value = {'🛒'} onClick={(e)=>console.log(e.target.value)}/>
                {productsTo.filter((event) => myCartArr[event.id]).map((event) => <MyCart amount= {myCartArr[event.id]} src={event.image} title={event.title.slice(0,15)+`...`} price={event.price} id={event.id}/>)}
              </div>
          </div>
      </nav>
  )
}
  