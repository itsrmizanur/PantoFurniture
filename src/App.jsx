import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav>
      <ul className='flex space-x-8 m-4'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
      <Outlet/>
    </>
  )
}

export default App
