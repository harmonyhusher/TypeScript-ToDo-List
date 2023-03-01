import React from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

type CounterProps = {
    initialValue: number
}

const Counter: React.FC<CounterProps> = ({initialValue}) => {

  let [count, setCounter] = useState(0)

  const increment = () => {
    setCounter(count + 1)
    console.log(count)
  }

  const decrement = () => {
    setCounter(count - 1)
  }

  return (
      <Card>
      <p>Counter: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </Card>
  )
}

export default Counter