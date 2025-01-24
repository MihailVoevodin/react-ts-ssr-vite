import { useState } from 'react'
import { styled } from 'styled-components';

const $Card = styled.div`
      color: red ;    
    `;

function Card() {


  const [count, setCount] = useState(0)

  return (
    <$Card>
    <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </$Card>
  )
}

export default Card
