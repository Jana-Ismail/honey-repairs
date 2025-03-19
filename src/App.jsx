import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button className="btn-secondary" onClick={handleBtnClick}>
        Click me!
      </button>
      <div>Count: {count}</div>
    </>
  )
}
