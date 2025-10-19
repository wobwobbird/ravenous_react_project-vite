import { useEffect, useState } from "react"

export function Searchbar({ className, handleAPICall }) {
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
    }

    const handleBusinessSearching = (e) => {
        setSearchTerm(e.target.value)
    }
    
    // useEffect(() => {
    //     console.log(searchTerm)
    // }, [searchTerm])

    const handleLocationSearching = (e) => {
        setLocation(e.target.value)
    }

    // useEffect(() => {
    //     console.log(location)
    // }, [location])

    // const handleSearch = () => {
    //     console.log(`Searching Yelp for ${searchTerm} in ${location}, with ${!sortOption ? "no filter" : sortOption.toLowerCase() }`)
    // }

    const isFormValid = searchTerm.trim() !== "" && location.trim() !== "";

    return (
        <div className={className} >
            <div className="holder _filter" >
                <button 
                    className={`unit ${sortOption === "best_match" ? "active" : ""}`} 
                    onClick={() => handleFilterSelected("Best Match")}
                    >Best Match</button>
                <button
                    className={`unit ${sortOption === "rating" ? "active" : ""}`}
                    onClick={() => handleFilterSelected("Highest Rated")}
                    >Highest Rated</button>
                <button
                    className={`unit ${sortOption === "review_count" ? "active" : ""}`}
                    onClick={() => handleFilterSelected("Most Reviewed")}
                >Most Reviewed</button>

            </div>
            <div className="holder _search" >
                <input
                    placeholder="Search Resturants"
                    onChange={handleBusinessSearching}
                ></input>
                <input
                    placeholder="Where?"
                    onChange={handleLocationSearching}
                    >
                </input>
            </div>
            <div className="holder _button" >
                <button
                    // onClick={handleSearch}
                    onClick={() => handleAPICall(searchTerm, sortOption, location)}
                    disabled={!isFormValid}
                >Search</button>
            </div>
        </div>
    )

}