const socket = io('http://localhost:8000')

//get document elements in a js variable
//send_container is id of form from index.html
const form = document.getElementById('send_container')

//similarily
const messageInput = document.getElementById('Message_input')

//whenever we receive messages, we have to put them in div element with class 'container'
const messageContainer = document.querySelector('.container')

//connecting our audio
var audio = new Audio('Graphic/Pin_sound.mp3')

//Function that will append to a container
const append = (message, position) => {
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    //Playing audio only when a message is received
    if (position == 'left') {
        audio.play();
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);//telling server that we have send a message
    messageInput.value = '';//input box become empty
})
//Launch an event

//If a new user joined, asked for his name
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);
//emitting an event to socket using 'new-user-joined' of 'nodeServer/index.js'

//display a new user has joined
//If any new user joined, let other user connected know
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right')
})

//if a person sends a message, let it broadcast to other people
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left')
})

//If a user leaves the chat, append it into container
socket.on('left', name => {
    append(`${name}: left the chat`, 'right')
})