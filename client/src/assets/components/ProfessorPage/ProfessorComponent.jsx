import React from "react";
import SessionSlots from "../SessionSlots";
import NewSideBar from "../NewSideBar";
function ProfessorComponent()
{
    return(
        <div className="flex flex-column">
            <NewSideBar></NewSideBar>
            <SessionSlots></SessionSlots>
            
        </div>
    );
}

export default ProfessorComponent;