import './ProductFilter.css'
import { CollectionSort } from '../CollectionSort/CollectionSort';
import { Button } from '../Button/Button';
import { sortBy } from "../../data/data";
import {MyContext} from '../../MyContext'
import { useContext, useState,useEffect } from 'react'

export const ProductFilter = () => {
    
    const {categories,newCategories } = useContext(MyContext);

  return(
      <nav className="product-filter">
          <h1>Jackets</h1>
          <div className="sort">
              <CollectionSort arr={categories} name={`Filter by`} onChange={newCategories}/>
              <CollectionSort arr={sortBy} name={`Sort by`} onChange={(e)=>console.log(e.target.value)}/>
              <Button value = {'🛒'} onClick={(e)=>console.log(e.target.value)}/>
          </div>
      </nav>
  )
}
  