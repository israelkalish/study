import { Button } from '../Button/Button'
import './ProductCard.css'
import {MyContext} from '../../MyContext'
import { useContext, useRef, useState } from 'react'

export const ProductCard = ({src,title,price,id}) => {
  const {inputOnChange,myCartArr,setMyCartArr} = useContext(MyContext);
  const inputEl = useRef(null)
//add useRef
  
  const [count,setCount] = useState(0)

  const newMyCartArr =(e)=>{
    const newObj ={...myCartArr}
    newObj[e.target.id]? newObj[e.target.id]+=count :newObj[e.target.id]=count
    inputEl.current.value = null
    // logic with the ref.current.wahtever
    setCount(0)
    setMyCartArr(newObj)
  }


  const input =<input type='number' onChange={(e) => inputOnChange(e, setCount)} class='amount' ref ={inputEl}/> // add the ref

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
            {input}
          </div>
          <div className="buttons-amount">
            <Button value='Add 🛒' className='bybutton' disabled={count === 0} id={id} onClick={newMyCartArr}/>
            <Button value='buy now' className='bybutton' onClick={(e)=>console.log(e.target.value)}/>
          </div>
        </div>
    )
}
