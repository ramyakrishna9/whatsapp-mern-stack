import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
           
            <div className="sidebar__header">
                <Avatar 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgT48H812z3i9PRc06kpZ8lTOObGn5ZLtPZA&usqp=CAU"
                />
                <div className="sidebarheader__right">
                     <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchcontainer">
                    <SearchOutlinedIcon />
                    <input placeholder="search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <h2>Add new chats</h2>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
        </div>
    )
}

export default Sidebar;
