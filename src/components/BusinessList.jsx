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
                        key={props.useAPIData ? business.id : business.name}
                        useAPIData={props.useAPIData}
                    />
                )
            })}   
        </div>
    )
}

export default BusinessList;