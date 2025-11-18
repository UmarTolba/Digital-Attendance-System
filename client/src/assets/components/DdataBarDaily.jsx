import React from "react";
function DataBarDaily()
{
    var registered_students = 50;
     var present = 30;
     var late = 10;
    var excused_absent = 5;
    var absent = 5;
    var course_name = "Dynamic Web Development";

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
        <div className="databar">
              <div className="databar-title">Course Name:
                <div className="databar-numbers">{course_name}</div>
            </div>
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
        display: flex;
        justify-content: space-around;
        background-color:  #cfcfcf;
        padding: 20px;
        border-radius: 8px;
        border-color: black;
        border-style: solid;
        border-width: 1px;
        margin: 20px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    }
    .databar-title {
        font-size: 1.2em;
        color: #333;
        text-align: center;
    }
    .databar-numbers {
        font-weight: bold;
        color: #1513b8;
        text-align: center;
    }
  `}</style>
        </>
    );
}
export default DataBarDaily;