import React from 'react';

const StudentList = ({ students = [] }) => {
    return (
        <>
            <style>{`
                .table-wrapper {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 0;
                    overflow: hidden;
                    box-shadow: 0px 8px 20px rgba(0,0,0,0.12);
                    width: 100%;
                    max-width: 720px;
                    margin: auto;
                }

                .student-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-family: 'Inter', Arial, sans-serif;
                    color: #2d3748;
                }

                /* HEADER */
                .student-table thead {
                    background: linear-gradient(to bottom, #e9f0fa, #dce7f5);
                }

                .student-table th {
                    padding: 18px 20px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #1f2d3d;
                    text-align: left;
                    border-bottom: 1px solid #e2e8f0;
                }

                /* BODY */
                .student-table td {
                    padding: 18px 20px;
                    font-size: 15px;
                    border-bottom: 1px solid #eef2f7;
                }

                .student-table tbody tr:hover {
                    background-color: #f7faff;
                }

                .student-table tbody tr:last-child td {
                    border-bottom: none;
                }

                /* STATUS BADGES */
                .status-badge {
                    padding: 6px 14px;
                    border-radius: 999px;
                    font-size: 14px;
                    font-weight: 500;
                    color: white;
                    display: inline-block;
                    min-width: 60px;
                    text-align: center;
                }

                .status-present {
                    background-color: #4CAF50;
                }

                .status-absent {
                    background-color: #E05353;
                }

                .status-late {
                    background-color: #F4B400;
                }
            `}</style>

            <div className="table-wrapper">
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Attendance Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            const status = student.attendanceStatus.toLowerCase();
                            const statusClass =
                                status === "present"
                                    ? "status-present"
                                    : status === "absent"
                                    ? "status-absent"
                                    : "status-late";

                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>
                                        <span className={`status-badge ${statusClass}`}>
                                            {student.attendanceStatus}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default StudentList;
