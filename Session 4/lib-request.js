
const request = require("request");

request('http://www.google.com', (error, response, body) => {
    if (error) {
        console.log(error);
    }
    if (response) {
        console.log(response.statusCode);
    }
    if (body) {
        
        console.log(body);
    }
});