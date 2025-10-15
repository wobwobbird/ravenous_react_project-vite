import { Business } from "./Business";

function BusinessList(props) {


    return (

        <div  
            className={props.className}
        >
            {props.businessAPIData.map( (business, index) => {
                return (
                    <Business 
                        className="business"
                        resturantData={business}
                        key={index}
                    />
                )

            })}
            {/* {props.businessAPIData.map( index => {
                return (
                    <Business 
                        className="business"
                        resturantData={props.businessAPIData[index]}
                        key={index}
                    />
                )

            })} */}
            {/* <Business className="business" ></Business> */}
            
        </div>
        // <div  
        //     className={props.className}
        //     businessAPIData={props.businessAPIData}
        // >
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        //     <Business className="business" ></Business>
        // </div>

    )
}

export default BusinessList;