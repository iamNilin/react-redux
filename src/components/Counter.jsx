import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement, incrementby5 } from '../redux/counter/counterAction'
const Counter = () => {
        const count  =   useSelector((state) =>  state.count)
       const count2 =   useSelector((state) => state.count2 )
    const dispatch =     useDispatch()
  return (
    <div>
        Count : {count}
  <button
  onClick={() => dispatch(increment())}
  >Increment</button>
  
  <button onClick={() => dispatch(decrement())}>decrement</button>


  count 2 = {count2}
  <button
  onClick={() =>  dispatch(incrementby5(10))}
  >Increment by 5</button>
    </div>
  )
}

export default Counter