import { Button } from '../Button/Button'
import './ProductCard.css'
import {MyContext} from '../../MyContext'
import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({src,title,price,id,description,category,rating,className,app}) => {
  const linkToProduct = useNavigate()
  const {inputOnChange,myCartArr,setMyCartArr,setSinglProduct} = useContext(MyContext);
  const inputEl = useRef(null)
  
  const [count,setCount] = useState(0)

  const newMyCartArr =(e)=>{
    const newObj ={...myCartArr}
    newObj[e.target.id]? newObj[e.target.id]+=count :newObj[e.target.id]=count
    inputEl.current.value = null
    setCount(0)
    setMyCartArr(newObj)
  }


  const input =<input type='number' onChange={(e) => inputOnChange(e, setCount)} class='amount' ref ={inputEl}/>
    return(
        <div className={className}>
          {app?
          (<div className="product-image" onClick={()=> {
            setSinglProduct(id)
              return(
                linkToProduct(`products/${id}`)
              )
            }}
          >
            <img src={src}/>
          </div>):
          (<div className="product-image" >
            <img src={src}/>
          </div>)
          }
          <div>
            {rating?
            <div  className="PageOfProduct-div">
              <h1>{title}</h1>
              <h5>{category}</h5>
              <p>{description}</p>
              <h5>${price}</h5>
              <div className="PageOfProduct-div-div">
              <p>rate:{rating['rate']}</p>
              <p>count:{rating['count']}</p>
              </div>
            </div>:
            <div className="product-info">
              <h5>{title}</h5>
              <h6>${price}</h6>
            </div>
            }
            <div className="buttons-amount">
              {input}
            </div>
            <div className="buttons-amount">
              <Button value='Add 🛒' className='bybutton' disabled={count === 0} id={id} onClick={newMyCartArr}/>
              <Button value='buy now' className='bybutton' onClick={(e)=>console.log(e.target.value)}/>
            </div>
          </div>
        </div>
    )
}
