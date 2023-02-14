import './App.css'
import image from './assets/lorry-tracks-from-air.jpeg'
import { ReactComponent as ReactLogo } from './assets/react.svg'
import { Image } from './components/Image'
import { Button } from './stories/Button'

function App() {
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
      <div className='h-full flex-1'>
        <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
