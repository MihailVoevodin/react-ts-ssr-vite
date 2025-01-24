import './App.css'
import { Suspense, lazy } from 'react'
import { Button } from 'antd';

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/logo.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <Button type="primary">Primary Button</Button>
      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
