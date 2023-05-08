import './ProductCard.css'

export const ProductCard = ({src,title,price}) => {
  const AmountOfItemsToUpload = 0
    return(
        <div className="product-card">
          <div className="product-image">
            <img src={src}/>
          </div>
          <div className="product-info">
            <h5>{title}</h5>
            <h6>${price}</h6>
            <div>
              <button></button>
              <P>{AmountOfItemsToUpload}</P>
              <button></button>
            </div>
          </div>
        </div>
    )
}
  