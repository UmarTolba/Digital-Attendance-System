import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
function NewSideBar()
{
    const { logout } = useAuth();
    return(
        <div className="bg-blue-800 p-3 text-black w-[20%] flex flex-col">
            <Link className="bg-blue-900 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/Profile"><i class="fa-solid fa-user"></i> Profile</Link>
            <Link className="bg-blue-900 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/Class List"><i class="fa-regular fa-rectangle-list mr-2"></i>Class List</Link>
            <Link className="bg-blue-900 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/SessionSlots"><i class="fa-solid fa-list-ol mr-2"></i>Session Slot</Link>
            <Link className="bg-blue-900 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/OverallAttendance"><i class="fa-solid fa-list-check mr-2"></i>Overall Attendence</Link>
            <Link className="bg-blue-900 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/Home"><i class="fa-solid fa-gear mr-2"></i>Settings</Link>
            <button onClick={()=>{logout()}} className="bg-red-700 p-1 rounded-md transition-all font-semibold duration-200 text-lg text-white hover:bg-white hover:text-red-900 m-1" to="/Logout"><i class="fa-solid fa-arrow-left mr-2"></i>Logout</button>
        </div>
    )
}

export default NewSideBar;