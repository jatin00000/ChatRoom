//Node server which will handle socket.io connections
const io = require('socket.io')(8000)//<-- port number

const users = {};

//whenever a user come to socket, run arrow function
io.on('connection', socket => {
    //io.on is a instance, which listen to multiple

    //socket.on.('<event-name>', <run-back-following>{
    //
    //})

    socket.on('new-user-joined', name => {
        // console.log(`new user`, name);
        //Socket.io listen to incoming events, when user joined
        //take name inside and run this socket
        //socket.on works for a paricular connection
        users[socket.id] = name;//update the user
        //give user a id, which is its name
        socket.broadcast.emit('user-joined', name);
        //broadcast to every user except the newly joined user by telling his name
    });

    //if a chat message is send
    socket.on('send' /*event name is send*/,/*if a message is send then handle*/message => {
        socket.broadcast.emit(/*event name is receive*/'receive', { message: message, name: users[socket.id] })
        //tell every other person
    });
    
    //if a user leaves the chat, event disconnect 
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);//displaying message
        //tell every other person
        delete users[socket.id];//deleting from user array
    });
})
//Here we completed Node server
//Now we will work on client side server