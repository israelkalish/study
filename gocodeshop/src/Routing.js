import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProductFilter } from './components/ProductFilter/ProductFilter';
import { Products } from './components/Products/Products';
import { MyContext } from "./MyContext";

 export const Routing = () => {
    const changingTheAmountOfItemsToAdd = (e)=> {
      console.log(e.target.innerText)
      const newAmount = e.target.innerText===`+` ? 1 : -1 
      console.log(newAmount)
      return newAmount
    }
    
    const retrievingProductsWithAllTheDetails = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            data.map((e) => e.category)
            setProductsWithData(data)
            setProductsTo(data)
        } catch(err){
            console.log(err)
        }
    }
    const [productsWithData,setProductsWithData] = useState([])
    const [productsTo,setProductsTo] = useState([])
    const [categoriesTo,setCategoriesTo] = useState([])

    const categories = productsWithData.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
    useEffect(() => {
        retrievingProductsWithAllTheDetails()
    },[])
    
    useEffect(() => {
      setProductsTo(categoriesTo==='All'?productsWithData:productsWithData.filter((p) => p.category===categoriesTo))
    },[categoriesTo])

    const newCategories =(e)=>setCategoriesTo(e.target.value)


  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
            changingTheAmountOfItemsToAdd,
            retrievingProductsWithAllTheDetails,
            productsTo,
            categories,
            categoriesTo,
            newCategories
        }}
      >
        <div className="App">
          <ProductFilter />
          <Products/>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}