import './App.css'
import { Button } from './stories/Button'

function App() {
  return (
    <>
      <nav className='flex'>Navigation</nav>
      <div>
        <Button>Test button</Button>
      </div>
      <div className='flex-1 h-full'>
        <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
