import React from "react";
function DataBarDaily({studentNumber, present, lateNumber, excusedNumber, absentNumber})
{
    var registered_students = studentNumber;
    var present = present;
    var late = lateNumber;
    var excused_absent = excusedNumber;
    var absent = absentNumber;
    var course_name = "Intro to Computing";

    function Attendance_percentage()
    {
        if(registered_students === 0)
        {
            return 0;
        }
        return (present / registered_students) * 100;
        }
 return(
        <>
            <h2 className="text-blue-900 m-auto flex justify-center items-center mt-5 font-bold text-2xl">{course_name}</h2>
        <div className="databar">
            
            <div className="databar-title">Registered students:
                <div className="databar-numbers">{registered_students}</div>
            </div>
            <div className="databar-title">
                Present:
                <div className="databar-numbers">{present}</div>
            </div>
            <div className="databar-title">
                Late:
                <div className="databar-numbers">{late}</div>
            </div>
            <div className="databar-title">
                Excused Absent:
                <div className="databar-numbers">{excused_absent}</div>
            </div>
            <div className="databar-title">
                Absent:
                <div className="databar-numbers">{absent}</div>
            </div>
              <div className="databar-title">
                Attendance %:
                <div className="databar-numbers">{Attendance_percentage()}</div>
            </div>
            
        </div>
    <style jsx>{`
           .databar {
           width:100%;
        display: flex;
        justify-content: space-around;
        background-color:  #0048ff76;
        padding: 20px;
        border-radius: 20px;
        border-color: white;
        border-style: solid;
        border-width: 1px;
        margin-top:20px;
    }
    .databar-title {
        font-size: 1.2em;
        color: white;
        text-align: center;
        font-weight: bold;
    }
    .databar-numbers {
        font-weight: bold;
        color: white;
        text-align: center;
    }
  `}</style>
        </>
    );
}
export default DataBarDaily;