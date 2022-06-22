# <p align="center"> :speech_balloon: ChatRoom :house: :blush: </p>
<p align="center">
  <img 
    width = "300px"
    height = "300px"
    src="https://user-images.githubusercontent.com/94428262/174448158-f46f66a4-a572-4f1e-913c-c2f748c998fe.jpeg"
  >
</p>
ChatRoom is a web page built using HTML, CSS, JavaScript and NodeJS.<br/>
It uses socket.io which is a library which uses principle of Web sockets protocol to provide simultanous messaging feature in real time like Whatsapp and automatic reconection.<br/>
It is built using two components:<br/>
- A Node Server which handles incoming and outgoing of messages, and provide real time messaging without delay.<br/>
- A client side website that it provide a interface to a user to interact with other users who are also using this application.<br/>
<br/>
:warning: The Node Server and the Webpage of ChatRoom will run on your local machine i.e. it works on localhost. But, don't worry, here there is a complete guide to setup it on your machine.<br/>

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

**:warning: Note**<br/>
The URL mention in the description is only the Front end part of my Project, not fully functional.<br/>
https://jatin00000.github.io/ChatRoom/ <br/>
To experience full functional application, Kindly follow below given steps in this document..... <br/>
- - - -

**Step 1: Importing necessary files and modules** <br/>
- In order to run server, you need to install NodeJs in your machine. <br/>
You can install it from [Here](https://nodejs.org/en/) <br/>
- Copy all the files and folders from my repository of ChatRoom from github to your machine.<br/>
- In order to import necessary modules of NodeJs, follow below steps: <br/>
  - Open the :open_file_folder: NodeServer folder in your Windows or Linus Terminal<br/>
  - Type the below code in terminal and it will automatically download and install two necessary modules which are nodemon and socket.io. <br/>
    - `npm i socket.io nodemon`<br/>
    - Below is example of installation of nodemon module through Windows terminal.<br/>
    - ![Screenshot (6256)](https://user-images.githubusercontent.com/94428262/174448021-cba22096-c58a-4ff1-ab64-8e971db45099.png)<br/>
  - Now we are ready with necessary modules to run the application.<br/>

- - - -

**Step 2: Setup NodeJs server**<br/>
- To Set up server, once again open the :open_file_folder: NodeServer folder in your Windows or Linus Terminal<br/>
- Type below code in the terminal
  - `nodemon .\index.js` in your Windows terminal. <br/>
  - ![Screenshot 2022-06-18 210912](https://user-images.githubusercontent.com/94428262/174447742-cc5e3958-b2bf-433e-9667-e9e95bac9614.png)<br/>
- Your server is ready. Keep the terminal running until you enjoy ChatRoom.<br/>
 
 - - - -
 
 **Step 3: Enjoy ChatRoom**<br/>
 - Open the :page_with_curl: index.html file in multiple tabs of your browser.
 - Enter User name.<br/>
 - ![Screenshot 2022-06-18 211115](https://user-images.githubusercontent.com/94428262/174447912-8ad48d29-1a47-43ed-bc0f-151c514224f5.png) <br/>
 - Now its time to Enjoy the ChatRoom.<br/>
 ![Screenshot 2022-06-18 211242](https://user-images.githubusercontent.com/94428262/174447934-e1103e46-85c4-4e69-b7bb-608d97138e1d.png)<br/>
 
 - - - -
 
 :blush: Enjoy Your Day :sunny: :blush:


