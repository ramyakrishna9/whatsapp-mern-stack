import React,{ useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";
import Chat from './Chat';

import './App.css';

function App() {
const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('5f569a7c63fcb88ff5a3', {
      cluster: 'us2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
      
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <div className="App">
      <div className="app__chat__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
