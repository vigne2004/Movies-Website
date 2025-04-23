import {useState} from 'react'

import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        -
      </button>
      <div>{count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

export default Counter
