const fs = require("fs");

// fs.writeFileSync("./data.txt", "This is a test content");

fs.writeFile("./data.txt", "This is from asynchronous program", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("File Write completed now")
});

console.log("File Write processing..");