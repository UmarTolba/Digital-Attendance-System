import React from "react";
function DataBarCourse()
{
    var registered_students = 50;
    var FWD=3;
    var number_of_courses=5;
    var course_name="Dynamic Web Development";
    var sum_of_attendance_percentage=300;
    function Attendancerate()
    {
        if(registered_students === 0)
        {
            return 0;
        }
        return (sum_of_attendance_percentage / number_of_courses);
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
                FWD:
                <div className="databar-numbers">{FWD}</div>
            </div>
              <div className="databar-title">
                Attendance Rate:
                <div className="databar-numbers">{Attendancerate()}</div>
            </div>
            
        </div>
    <style jsx>{`
           .databar {
        display: flex;
        justify-content: space-around;
        background-color: #cfcfcf;
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
export default DataBarCourse;