import React from "react";
import { Link } from "react-router-dom";
function NewSideBar()
{
    return(
        <div className="bg-blue-800 p-3 text-black w-[20%] flex flex-col">
            <Link className="bg-blue-900 p-1 rounded-md transition-all duration-200 text-sm text-white hover:bg-white hover:text-blue-900 m-1" to="/Profile"><i class="fa-solid fa-user"></i> Profile</Link>
            <Link className="bg-blue-900 p-1 rounded-md transition-all duration-200 text-sm text-white hover:bg-white hover:text-blue-900 m-1" to="/Class List">Class List</Link>
            <Link className="bg-blue-900 p-1 rounded-md transition-all duration-200 text-sm text-white hover:bg-white hover:text-blue-900 m-1" to="/SessionSlots">Session Slot</Link>
            <Link className="bg-blue-900 p-1 rounded-md transition-all duration-200 text-sm text-white hover:bg-white hover:text-blue-900 m-1" to="/OverallAttendance">Overall Attendence</Link>
            <Link className="bg-blue-900 p-1 rounded-md transition-all duration-200 text-sm text-white hover:bg-white hover:text-blue-900 m-1" to="/Home">Settings</Link>
            <Link className="bg-blue-900 p-1 rounded-md transition-all duration-200 text-sm text-white hover:bg-white hover:text-blue-900 m-1" to="/Logout">Logout</Link>
        </div>
    )
}

export default NewSideBar;