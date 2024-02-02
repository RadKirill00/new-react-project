import React, { useCallback, useEffect, useState } from 'react'

const UseEffect = () => {

const [count, setCount] = useState(0)
const [message, setMessage] = useState('Hello world')


const greeting = useCallback((text) => {
  console.log(text);
}, [])

useEffect(() => {
  greeting(message)
}, [greeting, message])

  return (
    <div className="">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> Нажми меня</button>
    </div>
  )
}

export default UseEffect