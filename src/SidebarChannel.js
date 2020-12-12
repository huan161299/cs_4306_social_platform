import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./SidebarChannel.css";
import SettingsIcon from "@material-ui/icons/Settings";

function SidebarChannel(props) {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel">
            <div className="sidebarChannelName"
                onClick={() => dispatch(
                        setChannelInfo({
                            channelId: props.id,
                            channelName: props.channelName,
                        }))
                }
            >
                <h4>
                    <span className="sidebarChannelName__hash">#</span>
                    {props.channelName} 
                </h4>
            </div>

            <div className="sidebarChannel__delete">
                <SettingsIcon onClick={() => props.onDeleteChannel(props.id)} />
                </div>
        </div>
    );
}

export default SidebarChannel;