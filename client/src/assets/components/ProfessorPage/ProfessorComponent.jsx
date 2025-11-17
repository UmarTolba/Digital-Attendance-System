import React from "react";
import SessionSlots from "../SessionSlots";
import NewSideBar from "../NewSideBar";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
function ProfessorComponent()
{
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    if(!user)
    {
        console.log("User not logged in");
        window.location.assign("/Login");
    }
    return(
        <div className="flex flex-column h-full">
            
            <NewSideBar></NewSideBar>
            <div className="w-full h-full p-5">
                <h1 className="text-blue-800 font-bold text-4xl">Dashboard</h1>
                <SessionSlots></SessionSlots>
            </div>
            
        </div>
    );
}

export default ProfessorComponent;