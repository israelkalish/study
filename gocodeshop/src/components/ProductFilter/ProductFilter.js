import './ProductFilter.css'
import { CollectionSort } from '../CollectionSort/CollectionSort';


const filterBy = [`All Jackets`,`2016`,`jacket`,`Jackets`,`layers`,`Obermeyer`,`Roxy`,`womens`]
const sortBy = [`Featured`,`Best Selling`,`Alphabetically, A-Z`,`Alphabetically, Z-A`,`Price, low to high`,`Price, high to low`,`Date, new to old`,`Date, old to new`]


export const ProductFilter = () => {
  return(
      <nav className="product-filter">
          <h1>Jackets</h1>
          <div className="sort">
              <CollectionSort arr={filterBy} name={`Filter by`}/>
              <CollectionSort arr={sortBy} name={`Sort by`}/>
          </div>
      </nav>
  )
}
  