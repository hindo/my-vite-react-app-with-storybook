import './App.css'
import { Button } from './stories/Button'
import { Image } from './components/Image'

import { ReactComponent as ReactLogo } from './assets/react.svg'
import image from './assets/lorry-tracks-from-air.jpeg'

function App() {
  return (
    <>
      <nav className='flex items-center space-x-3 p-4 mb-4'>
        <ReactLogo className='animate-spin' />
        <span>Logo</span>
      </nav>
      <div className='flex flex-col space-y-4 mb-4'>
        <Button>Test button</Button>
        <Image alt='Lorry tracks shown from the air' source={image} />
      </div>
      <div className='flex-1 h-full'>
        <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
