import { Button } from '../Button/Button'
import './ProductCard.css'
import {MyContext} from '../../MyContext'
import { useContext, useState } from 'react'

export const ProductCard = ({src,title,price}) => {

  const [amountOfItemsToAdd, setAmountOfItemsToAdd] = useState(0);
  
    return(
        <div className="product-card">
          <div className="product-image">
            <img src={src}/>
          </div>
          <div className="product-info">
            <h5>{title}</h5>
            <h6>${price}</h6>
          </div>
          <div className="buttons-amount">
            <input type='number' onChange={(e)=>{if(e.target.value<1){e.target.value=null};setAmountOfItemsToAdd(e.target.value) }} class='amount' />
          </div>
          <div className="buttons-amount">
            <Button value='Add 🛒' disabled={!amountOfItemsToAdd} onClick={(e)=>console.log(e.target.value)}/>
            <Button value='buy now' onClick={(e)=>console.log(e.target.value)}/>
        </div>
      </div>
    )
}

{/* 
  
  <Button value='-' onClick={amountOfItemsToAdd?()=>setAmountOfItemsToAdd (amountOfItemsToAdd-1):()=>setAmountOfItemsToAdd (amountOfItemsToAdd)}/>
<p>{amountOfItemsToAdd}</p>
<Button value='+' onClick={()=>setAmountOfItemsToAdd (amountOfItemsToAdd+1)}/> */}