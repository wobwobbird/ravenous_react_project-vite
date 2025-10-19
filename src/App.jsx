import { useState } from 'react'
import './App.css'
import Balatro from './components/Balatro'
import BusinessList from './components/BusinessList'
import { Searchbar } from './components/Searchbar'
import mockDataObject from './mockData.json' 
import { retrieveListings } from './utils/YelpApi.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  // let businessArray = [mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject];
  let businessArray = [
    {...mockDataObject,
      "name": "Grottos Pizzeria",
      "city": "Lil VIllage",
      "zipCode": "10001",
      "category": "Italian",
      "rating": 4.0,
      "reviewCount": 9000    
    }, 
    {...mockDataObject,
      "name": "Dominos",
      "city": "Cloud",
      "zipCode": "456289",
      "category": "Dirty Italian",
      "rating": 4.6,
      "reviewCount": 900000    
    }, 
    {...mockDataObject,
      "name": "BussLand",
      "city": "BGreen",
      "zipCode": "10001",
      "category": "Shit",
      "rating": 3.1,
      "reviewCount": 956    
    }, 
    mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject, mockDataObject];

  // retrieveListings();

  return (
    <div className='first' >
      <div className='header-bar' >
        <p>Ravenous Darling?</p>
      </div>
      <Searchbar className='searchbar' >
      </Searchbar>
      <BusinessList businessAPIData={businessArray} className="business-list" >
      </BusinessList>
    </div>
  )
}

export default App