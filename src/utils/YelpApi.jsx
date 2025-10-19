const apiKey = import.meta.env.VITE_YELP_API_KEY;
const url = 'https://api.yelp.com/v3'
const bizSearchEndpoint = '/businesses/search?'
const requestTestParam = "term=delis&latitude=37.786882&longitude=-122.399972"
const requestTestParam2 = "sort_by=best_match&limit=20"
const requestTestParam3 = "term=british&latitude=51.513200&longitude=-0.131223"

export const retrieveListings = async (searchTerm, sortOption, location) => {
    // console.log("API Start")
    // console.log("URL ", urlBuilder)
    
    const searchInput = `&term=${searchTerm}`  //&term=british
    const sortInput = `&sort_by=${sortOption}&limit=20`  // sortOption //&sort_by=best_match&limit=20

    
    
    function processSearchString(locationParam) {
        const searchInputSplit = locationParam.split(" ")
        // console.log("searchInputSplit ", searchInputSplit)
        const part1 = `location=${searchInputSplit[0]}`
        if (searchInputSplit[1]) {
            let part2 = part1
            // console.log("part 2A", part2)
            for (let i = 1; i < searchInputSplit.length; i++) {
                part2 += `%20${searchInputSplit[i]}`
                // console.log("part 2B", part2)
            }
            return part2
        }
        return part1
        // location=Soho %20london %20england
        // location=Soho%20london%20england
        // location=Soho%20London%20England
    }
    
    const locationInput = processSearchString(location)

    // console.log("locationInput G ", locationInput)
    


    
    let requestParam = locationInput + searchInput + sortInput

    // location=Soho%20london%20england
    
    if (sortOption === "") {
        requestParam = locationInput + searchInput
    }
    
    const urlBuilder = url + bizSearchEndpoint + requestParam

    // v3/businesses/search?location=Soho%20London&term=british&sort_by=best_match&limit=20' \
    // v3/businesses/search?location=Soho&term=british&sort_by=best_match&limit=20
    // v3/businesses/search?location=Soho&term=british&sort_by=best_match&limit=20

    // https://api.yelp.com/v3/businesses/search?location=Soho&term=british&sort_by=best_match&limit=20
    // https://api.yelp.com/v3/businesses/search?location=Soho&term=british&sort_by=best_match&limit=20


    // console.log("Guy ", urlBuilder)

    try {
        const response = await fetch(urlBuilder, {
            headers: {
                Authorization: "Bearer " + apiKey,
                accept: "application/json"
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            const businesses = jsonResponse.businesses;
            console.log("Guy New", businesses)
            return businesses;
        }
        console.log("ERROR");
    } catch (error) {
        console.log(error)
    }
}

// v3/businesses/search?location=Soho%20london%20england&term=british&sort_by=best_match&limit=20

// v3/businesses/search?location=Soho%20London%20England&term=british&sort_by=best_match&limit=20