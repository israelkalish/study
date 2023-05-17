import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { MyContext } from "./MyContext";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Admin from "./components/Admin/Admin";
import PageOfProduct from "./components/PageOfProduct/PageOfProduct";

const Routing =()=>{
    const changingTheAmountOfItemsToAdd = (e) => {
      console.log(e.target.innerText);
      const newAmount = e.target.innerText === `+` ? 1 : -1;
      console.log(newAmount);
      return newAmount;
    };
  
    const retrievingProductsWithAllTheDetails = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        data.map((e) => e.category);
        setProductsWithData(data);
        setProductsTo(data);
      } catch (err) {
        console.log(err);
      }
    };
    const [productsWithData,setProductsWithData] = useState([]);
    const [productsTo,setProductsTo] = useState([]);
    const [categoriesTo,setCategoriesTo] = useState([]);
    const [myCartArr,setMyCartArr] = useState({});
    const [singlProduct,setSinglProduct] = useState(0);
  
    const categories = productsWithData
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);
  
    useEffect(() => {
      retrievingProductsWithAllTheDetails();
    }, []);
  
    useEffect(() => {
      setProductsTo(
        categoriesTo === "All"
          ? productsWithData
          : productsWithData.filter((p) => p.category === categoriesTo)
      );
    }, [categoriesTo]);
  
    const newCategories = (e) => {setCategoriesTo(e.target.value)};
    const inputOnChange = (e, setFunc) => {
      if (e.target.value < 1) {
        e.target.value = null;
      }
      setFunc(parseInt(e.target.value));
    };
    
    const newMyCartObj =(id,akshn)=>{
      const newObj ={...myCartArr}
      newObj[id]=newObj[id]+akshn
      setMyCartArr(newObj)
    }
  
    return(
        <BrowserRouter>
        <MyContext.Provider
          value={{
            changingTheAmountOfItemsToAdd,
            retrievingProductsWithAllTheDetails,
            productsTo,productsWithData,
            categories,
            categoriesTo,
            newCategories,
            inputOnChange,
            myCartArr,setMyCartArr,
            newMyCartObj,
            singlProduct,setSinglProduct
          }}
        >
            <Routes>
              <Route path="/" element={<App/>} />
              <Route path="about" element={<About/>} />
              <Route path="cart" element={<Cart/>} />
              <Route path="admin" element={<Admin/>} />
              <Route path="products/:id" element={<PageOfProduct/>} />
            </Routes>
        </MyContext.Provider>
        </BrowserRouter>
    )
}

export default Routing