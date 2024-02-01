import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [render, setRender] = useState(0)
  const [bag, setBag] = useState('white')



  useEffect(() => {

    const handleWindowClick = () => {
      document.documentElement.style.backgroundColor = generateRandomColor();
    };

    window.addEventListener('click', handleWindowClick)

    return () => {
    window.removeEventListener('click', handleWindowClick)
    }
  }, [])




  function handleClick() {
    setRender(render + 1)
  }

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div  className="">
    <h1>{render}</h1>
    <button onClick={handleClick}>Нажми меня</button>
  </div>
  )
}

export default UseEffect