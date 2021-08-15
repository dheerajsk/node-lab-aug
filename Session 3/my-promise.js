
const val = 4;

const mypromise = new Promise((resolve, reject) => {
    if (val > 0) {
        resolve("Valid Value");
    } else {
        reject("InvalidValue");
    }
});

mypromise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
).catch(err => { console.log(err) }).finally(res => { console.log("Promise completed") });