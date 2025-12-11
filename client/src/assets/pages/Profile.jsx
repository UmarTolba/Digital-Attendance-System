import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// const userData = {
//   name: 'Jane Doe',
//   role: 'Software Engineer',
//   email: 'jane.doe@company.com',
//   password: '••••••••••••', 
//   joinDate: 'Joined May 2024',
// };



function Profile(){
  
    const [userData, setUserData] = useState();
    const userID = new URLSearchParams(window.location.search).get('user');
    useEffect(()=>{
        const fetchUser = async ()=>{
            const response = await axios.post("http://localhost:3000/api/user/id", {
                "_id":userID
            });
    
            console.log(response.data); 
            setUserData(response.data); 
        }
    
        fetchUser();
    }, []);

  const InfoItem = ({ label, value, icon }) => (
    <div className="flex items-start space-x-4 py-3 border-b border-gray-100 last:border-b-0">
      <div className="text-blue-500 pt-1 flex-shrink-0">
        {icon}
      </div>
      
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-lg text-gray-800 font-semibold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden">
        
        <div className="p-6 text-center border-b border-gray-200">
          <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3 text-4xl font-bold">
            JD
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">{userData.name}</h2>
          <p className="text-sm text-gray-500 mt-1">1-24-2020</p>
        </div>

        <div className="p-8 space-y-2">

          <InfoItem
            label="Full Name"
            value={userData.name}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
          />
          
          <InfoItem
            label="Role / Title"
            value={"Professor"}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.58 23.58 0 0112 15c-3.18 0-6.233-.62-9-1.745M16 4.905c1.19-.05 2.19-.46 3.03-1.25M8 4.905c-1.19-.05-2.19-.46-3.03-1.25M12 10a5 5 0 110-10 5 5 0 010 10z"></path></svg>}
          />
          
          <InfoItem
            label="Email Address"
            value={userData.email}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path></svg>}
          />
          
          <InfoItem
            label="Password (Masked)"
            value={userData.password}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>}
          />

        </div>
        
        <div className="p-6 pt-4 border-t border-gray-200">
            <Link to={"/Professor"} className="w-full py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition duration-150 font-medium">
                Return to Dashboard
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Profile;