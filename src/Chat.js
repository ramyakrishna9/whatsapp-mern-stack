import React, { useState } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./Chat.css";

import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat({ messages }) {
    const [input, setInput] =useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        axios.post("/messages/new", {
            message: input,
            name: "DEMO APP",
            timestamp: "just now!",
            received: false,
        });
        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerinfo">
                    <h3>Room name</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className="chat__headerright">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    
                    </p>
                 ))}  

               
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}
                        placeholder="Type a new message"
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />

            </div>

                    
        </div>
    )
}

export default Chat;
