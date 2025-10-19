import { useState, useEffect } from 'react'
import './App.css'
import Balatro from './components/Balatro'
import BusinessList from './components/BusinessList'
import { Searchbar } from './components/Searchbar'
import mockDataObject from './mockData.json' 
import { retrieveListings } from './utils/YelpApi'
import businessesArray from './mockDataCollection'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(true)


  const useAPIData = true; // SET THIS TO USE NON API BUSINESS INFO

  useEffect(() => {
    if (useAPIData) {
      retrieveListings("british", "rating", "Soho London")
        .then(data => {
          setApiData(data) // Extract the actual array from the Promise
          setLoading(false)
        })
        .catch(error => {
          console.error('Error:', error)
          setLoading(false)
        })
    }
  }, [])

  
  // const APIData = retrieveListings("british", "rating", "Soho London");
  // console.log("Promise date", APIData)

  return (
    <div className='first' >
      <div className='header-bar' >
        <p>Ravenous Darling?</p>
      </div>
      <Searchbar className='searchbar' />
      {(useAPIData && loading) ? (
          <div>Loading</div>
        ) : (
          <BusinessList 
            businessAPIData={useAPIData ? apiData : businessesArray}
            className="business-list"
            useAPIData={useAPIData}
          />
        )}
    </div>
  )
}

export default App