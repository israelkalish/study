import React, { useContext } from "react";
import AdminLogin from "../AdminLoginPage/AdminLoginPage";
import { MyContext } from "../../MyContext";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import AddNewItem from "../../components/AddNewItem/AddNewItem";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const EditingPage = () => {
  const { isadmin, setAddProduct, productsCategory } = useContext(MyContext);

  if (!isadmin) {
    return <AdminLogin />;
  }

  const newFiile = {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };

  return (
    <div>
      <ProductFilter />
      <button type="adding" onClick={() => setAddProduct(true)}>
        Adding
      </button>
      <AddNewItem />
      <section className="products">
        {productsCategory.map((event) => (
          <ProductCard
            app
            value="delete"
            className="product-card"
            src={event.image}
            title={event.title}
            price={event.price}
            id={event._id}
          />
        ))}
      </section>
    </div>
  );
};

export default EditingPage;
