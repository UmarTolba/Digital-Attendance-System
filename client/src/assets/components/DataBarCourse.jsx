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
export default DataBarCourse;