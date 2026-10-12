// https://axios.rest/pages/getting-started/examples/commonjs

const axiosRequest = require('axios')
const apiEndpoint = 'http://localhost:3000/posts'

// When async function is called, it returns a promise 
async function retrieveInsult() {
    // try marks a block of statements to try
    try {
        // The await operator is used to wait for a promise returned by an async function
        let response = await axiosRequest.get(apiEndpoint);
        const {id} = response.data;
        console.log(`${id}`);
        // catch specifies a response in case of an error
    } catch (error) {
        console.error(`An error has occurred: ${error}`)
    }
}

retrieveInsult()
console.log("Now!")
