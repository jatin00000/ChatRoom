# ChatRoom
- - - -
ChatRoom is a web page built using HTML, CSS, JavaScript and NodeJS.<br/>
It uses Web sockets to provide simultanous messaging feature like Whatsapp. It uses socket.io .<br/>
It is built using two components:<br/>
- A Node Server which handles incoming and outgoing of messages, and provide real time messaging without delay with help of Web Sockets<br/>
- A client side website that it provide a interface to a user to interact with other users on this server.<br/>
<br/>

- - - -

**Features**<br/>
- Ask for user name for new entering users.<br/>
![Screenshot 2022-06-18 211115](https://user-images.githubusercontent.com/94428262/174446543-dd320727-6fb3-4878-99cc-ef67da774b9d.png)<br/>
<br/>

- Display notification for new user joining and any user leaving the chat.<br/>
- Conservation with users through messaging in real time.<br/>
Following image below is a example for same.<br/>
![Screenshot 2022-06-18 211242](https://user-images.githubusercontent.com/94428262/174446669-ccd119f0-ea7b-4f15-8056-3b62e60a4caf.png)<br/>
<br/>

![Screenshot 2022-06-18 211315](https://user-images.githubusercontent.com/94428262/174446723-ac5233e4-8c0e-4641-aab4-befc766379cf.png)<br/>
<br/>

- - - -

**Note**<br/>
The URL mention in the description is only the Front end part of my Project, not fully functional.<br/>
https://jatin00000.github.io/ChatRoom/ <br/>
To experience full functional application, Kindly follow below given steps in this document..... <br/>
- - - -

**Step 1: Importing necessary files and modules** <br/>
- In order to run server, you need to install NodeJs in your machine. <br/>
You can install it from [Here](https://nodejs.org/en/) <br/>
- Copy all the files and folders from my repository of ChatRoom from github to your machine.<br/>
- In order to import necessary modules of NodeJs, follow below steps: <br/>
  - Open the NodeServer folder in your Windows or Linus Terminal<br/>
  - Type the below code in terminal and it will automatically download and install two necessary modules which are nodemon and socket.io. <br/>
    - `npm i socket.io nodemon`<br/>
  - Now we are ready with necessary modules to run the application.<br/>
