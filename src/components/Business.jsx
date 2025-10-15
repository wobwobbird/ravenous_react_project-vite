import RoastImage from '../assets/Roast.jpeg'

export function Business({ className, resturantData }) {
    return (
        <div className={className} >
            <img
                src={RoastImage}
                alt="Cosy Sunday Roast"
            />
            <div className='holder' >
                <h2 className='name' >{resturantData.name}</h2>

                <div className='smaller-text' >
                    <div className='left' >
                        <p >{`${resturantData.address}, ${resturantData.city}`}</p>
                        <p >{resturantData.state}</p>
                        <p >{resturantData.zipcode}</p>

                    </div>
                    <div className='right' >
                        <p >{resturantData.category}</p>
                        <p >{resturantData.rating}</p>
                        <p >{resturantData.reviewCount}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

// export function Business({ className }) {
//     return (
//         <div className={className} >
//             <img
//                 src={RoastImage}
//                 alt="Cosy Sunday Roast"
//             />
//             <div className='holder' >
//                 <h2 className='name' >Business name</h2>

//                 <div className='smaller-text' >
//                     <div className='left' >
//                         <p >address</p>
//                         <p >state</p>
//                         <p >zipcode</p>

//                     </div>
//                     <div className='right' >
//                         <p >category</p>
//                         <p >rating</p>
//                         <p >reviews</p>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }