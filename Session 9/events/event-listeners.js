const events = require("events");

// 1. Event Emitter
const eventEmitter = new events.EventEmitter();

// 3. Listener
function listner1(){
    console.log("Event received by Listener 1");
}

//2. Obervable event
console.log("Adding listener");
// option 1
// eventEmitter.addListener("write", listner1);
// option 2
eventEmitter.on("write", listner1);


console.log("Emiting write event");
eventEmitter.emit("write");