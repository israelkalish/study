console.log(`vvv`)


const filterBy = [`All Jackets`,`2016`,`jacket`,`Jackets`,`layers`,`Obermeyer`,`Roxy`,`womens`]
const sortBy = [`Featured`,`Best Selling`,`Alphabetically, A-Z`,`Alphabetically, Z-A`,`Price, low to high`,`Price, high to low`,`Date, new to old`,`Date, old to new`]
const CollectionSort = ({arr,name}) => {
    return(
        <div className="collection-sort">
          <label>{name}</label>
          <select>
            {arr.map((filter) => <option value="/">{filter}</option>)}
          </select>
        </div>
    )
}

const ProductFilter = () => {
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
  
const ProductCard = () => {
    return(
        <div className="product-card">
          <div className="product-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
            />
          </div>
          <div className="product-info">
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </div>
        </div>
    )
}

const ProductsWithData = [1,2,3,4,5,6,7,8,9,10]
const Products = () => {
    return(
        <section className="products">
            {ProductsWithData.map(() => <ProductCard/>)}
        </section>
    )
}

const Peigh = () => {
    return(
        <div>
            <ProductFilter/>
            <Products/>
        </div>
    )
}




ReactDOM.render(<Peigh/>, document.getElementById('app'));
