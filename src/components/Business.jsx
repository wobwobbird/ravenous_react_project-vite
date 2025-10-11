

export function Business() {
    return (
        <div >
            <h2>Business name</h2>
            <span>image</span>
            <p>name</p>
            <p>address</p>
            <p>state</p>
            <p>zipcode</p>
            <p>category</p>
            <p>rating</p>
            <p>reviews</p>
        </div>
    )
}

// export function Business(props) {
//     return (
//         <div {...props} >
//             <h2>Business name</h2>
//             <span>image</span>
//             <p>name</p>
//             <p>address</p>
//             <p>state</p>
//             <p>zipcode</p>
//             <p>category</p>
//             <p>rating</p>
//             <p>reviews</p>
//         </div>
//     )
// }

export function BusinessList({ children, className }) {


    return (
        <div className={className} >
            {children}
            {/* <Business className='min-h-75 min-w-75 bg-cyan-50  ' ></Business >
            <Business className='min-h-75 min-w-75 bg-cyan-50  ' >

            </Business>
            <Business className='w-75 h-75 bg-cyan-50  ' >

            </Business>
            <Business className='w-75 h-75 bg-cyan-50  ' >
            </Business>
            <Business className='w-75 h-75 bg-cyan-50  ' >

            </Business> */}
        </div>

    )
}