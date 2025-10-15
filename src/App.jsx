import { useState } from 'react'
import './App.css'
import Balatro from './components/Balatro'
import { Business } from './components/Business'
import BusinessList from './components/BusinessList'
import { Searchbar } from './components/Searchbar'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className='first' >
      <div className='header-bar' >
        <p>Ravenous Darling?</p>
      </div>
      <Searchbar className='searchbar' >
      </Searchbar>
      <BusinessList props={props} className="business-list" >
      </BusinessList>
    </div>
  )
}

export default App