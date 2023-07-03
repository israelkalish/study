import "./ProductFilter.css";
import { CollectionSort } from "../CollectionSort/CollectionSort";
import { Button } from "../Button/Button";
import { sortBy } from "../../data/data";
import { MyContext } from "../../MyContext";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

export const  ProductFilter = ({ app }) => {
  const {
    categories,
    newCategories,
    setShowCart,
    CartIndex, isadmin
  } = useContext(MyContext);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`editingPage`)
  }

  return (
    <nav className="product-filter">
      <h1>my shop</h1>
      <div className="sort">
        {app && (
          <div className="sort">
            <CollectionSort
              arr={categories}
              name={`Filter by`}
              onChange={newCategories}
            />
            <CollectionSort
              arr={sortBy}
              name={`Sort by`}
              onChange={(e) => console.log(e.target.value)}
            />
            <div className="MyCart">
              { isadmin && <Button value = {`🖊️`} onClick={handleClick}/>}
            </div>
          </div>
        )}
        <div className="MyCart">
          <Button value={"🛒"} onClick={() => !CartIndex[0]?alert("your cart is empty"):setShowCart(true)} />
        </div>
      </div>
    </nav>
  );
};
