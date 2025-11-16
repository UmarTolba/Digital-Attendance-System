import React from 'react';

const StudentList = ({ students }) => {
    return (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Attendance Status</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.attendanceStatus}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentList;
