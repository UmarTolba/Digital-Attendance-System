import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
function NewSideBar({sessionID, user})
{
    const { logout } = useAuth();
    return(
        <div className="bg-blue-600 p-3 text-black w-[20%] flex flex-col">
            <Link className="bg-blue-800 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/Professor"><i className="fa-solid fa-gauge"></i> Dashboard</Link>
            <Link className="bg-blue-800 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to={"/Profile?user="+user._id}><i className="fa-solid fa-user"></i> Profile</Link>
            {sessionID && sessionID != "" ? (<Link className="bg-blue-800 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to={"/ClassList?sessionID="+sessionID}><i className="fa-regular fa-rectangle-list mr-2"></i>Class List</Link>):(<></>)}
            
            <Link className="bg-blue-800 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/SessionSlots"><i className="fa-solid fa-list-ol mr-2"></i>Session Slot</Link>
            <Link className="bg-blue-800 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/OverallAttendance"><i className="fa-solid fa-list-check mr-2"></i>Overall Attendence</Link>
            <Link className="bg-blue-800 p-1 pl-3 rounded-md transition-all duration-200 text-lg text-white hover:bg-white hover:text-blue-900 m-1" to="/Settings"><i className="fa-solid fa-gear mr-2"></i>Settings</Link>
            <button onClick={()=>{logout()}} className="w-[97%] bg-red-400 p-1 rounded-md transition-all font-semibold duration-200 text-lg text-white hover:bg-white hover:text-red-900 m-1" to="/Logout"><i className="fa-solid fa-arrow-left mr-2"></i>Logout</button>
        </div>
    )
}

export default NewSideBar;