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
        </div>
    )
}

export default BusinessList;