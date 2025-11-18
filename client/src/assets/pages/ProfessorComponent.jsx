import React from "react";
import SessionSlots from "../components/SessionSlots";
import NewSideBar from "../components/NewSideBar";
import StudentList from "../components/StudentList";
import { useAuth } from "../../AuthContext";
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
                <div className="flex flex-row justify-center h-[90%] items-center mt-9">
                    <SessionSlots></SessionSlots>

                    <div className="w-[68%] h-full border-solid border-[1px] border-[#5e97ff] rounded-[20px] mt-0 p-5">
                        <h2 className="text-blue-800 font-bold text-xl mb-2 opacity-80 ">Student List</h2>
                        <StudentList cla></StudentList>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ProfessorComponent;