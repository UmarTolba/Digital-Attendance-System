import React, { useState } from "react";
import { Link } from "react-router-dom";
import SessionSlots from "../components/SessionSlots";
import NewSideBar from "../components/NewSideBar";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import CreateSession from "../components/sessions/CreateSession";
function SessionViewer()
{
    const [studentNumber, setStudentNumber] = useState(0);
    const [presentStudents, setPresent] = useState(0);
    const [lateStudents, setLate] = useState(0);
    const [excusedStudents, setExcused] = useState(0);
    const [absentStudents, setAbsent] = useState(0);
    const [sessionID, setSessionID] = useState(0);
    const [sessionName, setSessionName] = useState("'Choose a Session First'");
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    if(!user)
    {
        console.log("User not logged in");
        window.location.assign("/Login");
    }
    return(
        <div className="flex flex-column h-full">
            
            <NewSideBar sessionID={sessionID}></NewSideBar>
            <div className="w-full h-full p-5">
                <h1 className="text-blue-800 font-bold text-4xl">Sessions</h1>
                <div className="flex flex-row justify-center h-[90%] items-center mt-9">
                    <SessionSlots
                    setSessionID={setSessionID}
                    setSessionName={setSessionName}
                    ></SessionSlots>

                    <CreateSession/>
                </div>
            </div>

            
        </div>
    );
}

export default SessionViewer;