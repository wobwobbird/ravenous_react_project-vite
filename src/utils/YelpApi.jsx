const apiKey = HIDDEN;
const url = 'https://api.yelp.com/v3'
const bizSearchEndpoint = '/businesses/search'

const retrieveListings = async () => {
    const urlBuilder = url + bizSearchEndpoint

    try {
        const response = await fetch(urlBuilder, {
            // Authorization: Bearer apiKey
            // accept: application/json'
        });
        if (response.ok) {
            const jsonResponse = await responce.json();
            console.log("Guy ", jsonResponse)


        }


    } catch (error) {
        console.log(error)
    }


}