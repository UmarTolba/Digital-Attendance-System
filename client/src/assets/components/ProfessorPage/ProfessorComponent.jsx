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
        navigate("/login");
    }
    return(
        <div className="flex flex-column h-full">
            
            <NewSideBar></NewSideBar>
            <SessionSlots></SessionSlots>
            
        </div>
    );
}

export default ProfessorComponent;