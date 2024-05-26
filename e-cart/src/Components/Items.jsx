import React, { useContext } from 'react'
import {CartContext} from '../Context/Cart'
const Items = ( props ) => {
  const items = useContext(CartContext);
  console.log(items);
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price - ${props.price}</p>
      {/* <button onClick={(item) => [...]}>Add to Cart</button> */}
    </div>
  )
}

export default Items
