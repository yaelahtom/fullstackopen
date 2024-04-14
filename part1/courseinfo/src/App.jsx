/* eslint-disable react/prop-types */
import { useState } from "react";


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    setLeft(left + 1)
    console.log('left after', left)
    setTotal(left + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(' ')}</p>
      <p>total: {total}</p>
    </div>
  )
}

export default App