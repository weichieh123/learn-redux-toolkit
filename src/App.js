import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { increment, decrement, incrementByAmount } from './redux/counter'

function App() {
  // const [count, setCount] = useState(0)
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      {/* <button onClick={() => setCount(count - 1)}>decrement</button> */}
      
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>increment by 33</button>
    </div>
  )
}

export default App
