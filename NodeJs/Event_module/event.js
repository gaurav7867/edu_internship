const EventEmiiter = require('events');
const event = new EventEmiiter();

// event.on('saymyname',()=>{
//     console.log('Hello! Gaurav Gupta')
// })

// event.on('saymyname',()=>{
//     console.log('How are you?')
// })

// event.emit('saymyname');

event.on('checkPage',(sc, msg)=>{
    console.log(`Status cose is ${sc} and the page is ${msg}`);
})
event.emit('checkPage', 200,'Ok');