
const fs = require("fs");

const cb = (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());

        // call mongo
    }
}

fs.readFile("employeeData.txt", cb);


console.log(2+2);