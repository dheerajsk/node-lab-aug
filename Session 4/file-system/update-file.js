
const fs = require("fs");

fs.appendFileSync("./data.txt", "\nThis is another line synchornously", ()=>{
    console.log("data");
});

fs.appendFile("./data.txt", "\n This is another line asynchronously", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Update Completed");
    }
});