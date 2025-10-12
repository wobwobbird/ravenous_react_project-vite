import { useState } from 'react'
import './App.css'
import Balatro from './components/Balatro'
import { BusinessList, Business } from './components/Business'
import { Searchbar } from './components/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='first' >
      <div className='header-bar' >
        <p>Ravenous Darling?</p>
      </div>
      <Searchbar className='searchbar' >
      
      </Searchbar>
      <BusinessList className="business-list" >
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
        <Business className="business" ></Business>
      </BusinessList>


      {/* <p>hello world</p> */}
    </div>
  )
}

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="relative w-screen h-screen bg-black">
//       {/* Animated Balatro background */}
//       <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
//         <Balatro 
//           isRotate={true}
//           spinSpeed={5}
//           color1="#DE443B"
//           color2="#006BB4"
//           color3="#162325"
//           mouseInteraction={true}
//         />
//       </div>
      
//       {/* Your content goes here */}
//       <div className="home">
//         <h1 className="title">Hello World</h1>
//         <div className='board'  >
//           <Searchbar className='h-20 bg-amber-300 ' ></Searchbar>
//           {/* <p>Hello</p> */}
//           <BusinessList className="business-list" >
//             <Business ></Business >
//             <Business ></Business >
//             <Business ></Business >


//           </BusinessList>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
