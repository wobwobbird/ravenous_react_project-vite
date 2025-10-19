import { useEffect, useState } from "react"

export function Searchbar({ className }) {
    const [location, setLocation ] = useState("")
    const [sortOption, setSortOption ] = useState("")
    const [searchTerm, setSearchTerm ] = useState("")

    const handleFilterSelected = (input) => {
        if (input === "Best Match") {
            if (sortOption === "best_match") {
                setSortOption("") 
            } else {
                setSortOption("best_match")
            }
        } else if (input === "Highest Rated") {
            if (sortOption === "rating") {
                setSortOption("") 
            } else {
                setSortOption("rating")
            }
        } else if (input === "Most Reviewed") {
            if (sortOption === "review_count") {
                setSortOption("") 
            } else {
                setSortOption("review_count")
            }
        }
        // alert("Pressed")÷
    }

    const handleBusinessSearching = (e) => {
        setSearchTerm(e.target.value)
    }
    
    useEffect(() => {
        console.log(searchTerm)
    }, [searchTerm])

    const handleLocationSearching = (e) => {
        setLocation(e.target.value)
    }

    useEffect(() => {
        console.log(location)
    }, [location])

    const handleSearch = () => {
        console.log(`Searching Yelp for ${searchTerm} in ${location}, with ${!sortOption ? "no filter" : sortOption.toLowerCase() }`)
    }


    // useEffect ()

    return (
        <div className={className} >
            <div className="holder _filter" >
                <button 
                    className={`unit ${sortOption === "Best Match" ? "active" : ""}`} 
                    // onClick={() => alert("STOP PRESSING")}
                    onClick={() => handleFilterSelected("Best Match")}
                    >Best Match</button>
                <button
                    className={`unit ${sortOption === "Highest Rated" ? "active" : ""}`}
                    // onClick={() => {
                        //     setFilter("highestRated")
                        // }}
                    onClick={() => handleFilterSelected("Highest Rated")}
                    // onClick={() => alert("NOT FINISHED")}
                    >Highest Rated</button>
                <button
                    className={`unit ${sortOption === "Most Reviewed" ? "active" : ""}`}
                    // onClick={() => {
                        //     setFilter("mostReviewed")
                        // }}
                    // onClick={() => alert("Whothere, this feature is not yet built")}
                    onClick={() => handleFilterSelected("Most Reviewed")}
                >Most Reviewed</button>

            </div>
            <div className="holder _search" >
                {/* <p>Helloooo</p> */}
                <input
                    placeholder="Search Businesses"
                    onChange={handleBusinessSearching}
                ></input>
                <input
                    placeholder="Where?"
                    onChange={handleLocationSearching}
                    // onChange={(e) => console.log(e)}
                >
                </input>
            </div>
            <div className="holder _button" >
                <button
                    onClick={handleSearch}
                >Search</button>

                
            </div>
        </div>
    )

}