import RoastImage from '../assets/Roast.jpeg'

export function Business({ className }) {
    return (
        <div className={className} >
            <img
                src={RoastImage}
                alt="Cosy Sunday Roast"
            />
            <div className='holder' >
                <h2 className='name' >Business name</h2>

                <div className='smaller-text' >
                    <div className='left' >
                        <p >address</p>
                        <p >state</p>
                        <p >zipcode</p>

                    </div>
                    <div className='right' >
                        <p >category</p>
                        <p >rating</p>
                        <p >reviews</p>
                    </div>

                </div>

            </div>
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
        </div>

    )
}