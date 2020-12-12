import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            )
        );
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");

        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    };

    const handleDeleteChannel = (id) => {
        if (window.confirm("Do you want to delete this channel?")) {
            db.collection("channels").doc(id).delete().catch((error) => alert(error.message));
        } else { }
    };

    const handleLogOut = () => {
        if (window.confirm("Do you want to logout?")) {
            auth.signOut();
        } else { }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Platform Server</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>

                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => (
                        <div>
                            <SidebarChannel
                                key={id}
                                id={id}
                                channelName={channel.channelName} 
                                onDeleteChannel={handleDeleteChannel} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 6)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <SettingsIcon onClick={handleLogOut}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;