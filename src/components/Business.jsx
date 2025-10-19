import RoastImage from '../assets/Roast.jpeg'

export function Business({ className, resturantData, useAPIData }) {
    console.log()
    return (
        <div className={className} >
            <div className='image-space' >
                <img
                    src={useAPIData ? resturantData.image_url : RoastImage}
                    alt={useAPIData ? resturantData.name : "Cosy Sunday Roast"}
                />
            </div>
            <div className='holder' >
                <h2 className='name' >{resturantData.name}</h2>

                <div className='smaller-text' >
                    <div className='left' >
                        {useAPIData ? (
                            <p >{`${resturantData.location.address1}, ${resturantData.location.city}`}</p>
                        ) : (
                            <p >{`${resturantData.address}, ${resturantData.city}`}</p>
                        )}
                        <p >{useAPIData ? resturantData.location.state : resturantData.state}</p>
                        <p >{useAPIData ? resturantData.location.zip_code : resturantData.zipcode}</p>
                    </div>
                    <div className='right' >
                        <p >{useAPIData ? resturantData.categories[0].title : resturantData.category}</p>
                        <p >{resturantData.rating}</p>
                        <p >{resturantData.review_count}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}