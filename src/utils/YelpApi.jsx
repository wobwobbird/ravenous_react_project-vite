const apiKey = HIDDEN;
const url = 'https://api.yelp.com/v3'
const bizSearchEndpoint = '/businesses/search'

export const retrieveListings = async () => {
    console.log("API Start")
    const urlBuilder = url + bizSearchEndpoint

    try {
        const response = await fetch(urlBuilder, {
            headers: {
                Authorization: "Bearer " + apiKey,
                accept: "application/json"
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Guy ", jsonResponse)


        }


    } catch (error) {
        console.log(error)
    }


}

