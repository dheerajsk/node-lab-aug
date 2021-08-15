const fs = require("fs");

const fileExists = fs.existsSync("./data.txt");

if (fileExists) {
    // const data = fs.readFileSync("./data.txt");
    fs.readFile("./data.txt", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data.toString());
            
        }
    });
    // console.log(data.toString());
} else {
    console.error("File doesn't exist");
}