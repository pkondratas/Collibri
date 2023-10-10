import React from "react";
import { CreateRoom, JoinRoom } from "./RoomPageButtons";
import './LandingPage.css';

export const LandingPageLayout = () => {
    return (
        <div className={"main"}>
            <div className={"room-page-header"}>
                Collibri
            </div>
            <div className={"list"}>
                {/*Room list here*/}
            </div>
            <div className={"button-area"}>
                <CreateRoom />
                <JoinRoom />
            </div>
        </div>
    );
}