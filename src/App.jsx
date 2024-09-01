
import './App.css'
import Home from './Compontents/Home/Home'
import SideNavbar from './Compontents/SideNavbar/SideNavbar'

function App() {

  return (
    <>
        <div className='flex  min-h-screen'>
            <SideNavbar/>
            <Home/>
        </div>
    </>
  )
}

export default App
