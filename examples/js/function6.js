const axiosRequest = require('axios')
const apiEndpoint = 'https://insult.mattbas.org/api/insult'

// When async function is called, it returns a promise 
async function retrieveInsult() {
    // try marks a block of statements to try
    try {
        // The await operator is used to wait for a promise returned by an async function
        let response = await axiosRequest.get(apiEndpoint)
        console.log(`${response.data}`)
        // catch specifies a response in case of an error
    } catch (error) {
        console.error(`An error has occurred: ${error}`)
    }
}

retrieveInsult()

