import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import image from './assets/lorry-tracks-from-air.jpeg'
import { ReactComponent as ReactLogo } from './assets/react.svg'
import { Image } from './components/Image'
import { decrement, increment } from './slices/counter'
import { RootState } from './store/store'
import { Button } from './stories/Button'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <nav className='mb-4 flex items-center space-x-3 p-4'>
        <ReactLogo className='animate-spin' />
        <span>Logo</span>
      </nav>
      <div className='mb-4 flex flex-col space-y-4'>
        <Button>Test button</Button>
        <Image alt='Lorry tracks shown from the air' source={image} />
      </div>
      <div>
        <h1>Vite + React</h1>
      </div>
      <div className='my-4 flex items-center space-x-4'>
        <Button onClick={() => dispatch(decrement())}>DEC</Button>
        <span className='count'>{count}</span>
        <Button onClick={() => dispatch(increment())}>INC</Button>
      </div>
    </>
  )
}

export default App
