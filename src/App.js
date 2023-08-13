import React,{useContext} from 'react'
import Counter from './component/Counter'
import { CounterContext } from './context/Counter'

const App = () => {

  const counter=useContext(CounterContext)

  return (
    <div className='App'>
       <h1> Count is {counter.count}</h1>
       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/>
    </div>
  )
}

export default App