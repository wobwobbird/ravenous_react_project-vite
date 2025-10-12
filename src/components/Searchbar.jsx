
export function Searchbar({ className }) {

    return (
        <div className={className} >
            <div className="holder _filter" >
                <button 
                    className="unit"
                >Best Match</button>
                <button
                    className="unit"
                    // onClick={() => {
                    //     setFilter("highestRated")
                    // }}
                >Highest Rated</button>
                <button
                    className="unit"
                    // onClick={() => {
                    //     setFilter("mostReviewed")
                    // }}
                >Most Reviewed</button>

            </div>
            <div className="holder _search" >
                {/* <p>Helloooo</p> */}
                <input
                    placeholder="Search Businesses"
                ></input>
                <input
                    placeholder="Where?"
                >
                </input>
            </div>
            <div className="holder _button" >
                <button>Search</button>
                
            </div>
        </div>
    )

}