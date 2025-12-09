import React, { useState } from "react";
import StudentList from "../components/StudentList";
import NewSideBar from "../components/NewSideBar";
import DataBarDaily from "../components/DdataBarDaily";

function ClassList() {
    // counters provided to DataBarDaily; StudentList will update them via setters
    const [studentNumber, setStudentNumber] = useState(0);
    const [presentStudents, setPresent] = useState(0);
    const [lateStudents, setLate] = useState(0);
    const [excusedStudents, setExcused] = useState(0);
    const [absentStudents, setAbsent] = useState(0);

    return (
    <div className="flex h-screen">
            <NewSideBar />

            <div className="flex flex-col flex-1 p-6 bg-gray-100">
        {/* page-scoped override to allow StudentList's internal .table-wrapper to grow */}
        <style>{`.overall-student .table-wrapper { max-height: calc(100vh - 240px) !important; min-height: 420px !important; padding-bottom: 4rem !important; overflow:auto !important; }`}</style>
                <h1 className="text-3xl font-bold mb-6 align center"></h1>

                <div className="flex flex-col flex-1 gap-4">
                    <div>
                    <DataBarDaily 
                        studentNumber={studentNumber} 
                        present={presentStudents}
                        lateNumber={lateStudents}
                        excusedNumber={excusedStudents}
                        absentNumber={absentStudents}
                     ></DataBarDaily>
                    </div>
                    <div className="flex-[3] flex flex-col">
                        <div className="flex-1 overflow-auto pb-32 overall-student mt-10 relative z-0">
                            <StudentList
                                studentNumber={setStudentNumber}
                                presentNumber={setPresent}
                                lateNumber={setLate}
                                excusedNumber={setExcused}
                                absentNumber={setAbsent}
                            />
                        </div>
                        <div className="h-28" aria-hidden="true" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default ClassList;