const queryString = require("querystring");

const url = "http://www.test.com?username=testname&email=test@test.com&id=1";
const params="username=testname&email=test@test.com&id=1";
// const obj = queryString.parse(params);
console.log(queryString.parse(params).username);