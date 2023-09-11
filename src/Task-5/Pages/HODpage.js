import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const appliedLeave = JSON.parse(localStorage.getItem('userLeaves')) || [];

function HODpage() {
  const navigate = useNavigate();
  const [leaveList, setLeaveList] = useState(appliedLeave);
  const user = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  console.log(user)
  const handleApprove = (index) => {
    const updatedLeaveList = [...leaveList];
    updatedLeaveList[index].status = 'Approved'; // Assuming you have a 'status' property in the leave object
    setLeaveList(updatedLeaveList);

    // Update the status in localStorage
    const existingLeaves = JSON.parse(localStorage.getItem("userLeaves")) || [];
    existingLeaves[index].status = 'Approved';
    localStorage.setItem("userLeaves", JSON.stringify(existingLeaves));
  };

  // Function to handle the rejection of leave
  const handleReject = (index) => {
    const updatedLeaveList = [...leaveList];
    updatedLeaveList[index].status = 'Rejected'; // Assuming you have a 'status' property in the leave object
    setLeaveList(updatedLeaveList);

    // Update the status in localStorage
    const existingLeaves = JSON.parse(localStorage.getItem("userLeaves")) || [];
    existingLeaves[index].status = 'Rejected';
    localStorage.setItem("userLeaves", JSON.stringify(existingLeaves));
  };

  return (
    <>
      <div className="bg-white py-5 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:p21 *96+3.
        x-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl d-inline text-left">HOD page</h2>
          </div>
          <div className="mx-auto p-5 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            {leaveList.length > 0 ? (
              leaveList.map((leave, index) => {
                // Find the staff member associated with the leave request
                const staffMember = user.find((userObj) => userObj.userType === 'staff' && userObj.userId === leave.userId);

                return (
                  <div key={index} className='shadow p-4'>
                    {staffMember && <div>Name: {staffMember.firstName } {staffMember.lastName}</div>}
                    <div>Start Date: {formatDate(leave.startDate)}</div>
                    <div>End Date: {formatDate(leave.endDate)}</div>
                    <div>Reason: {leave.reason}</div>
                    <div className='my-3'>
                      {leave.status === 'Approved' ? (
                        <span className='text-success'>Approved</span>
                      ) : leave.status === 'Rejected' ? (
                        <span className='text-danger'>Rejected</span>
                      ) : (
                        <>
                          <button onClick={() => handleApprove(index)} className='btn btn-success mr-2'>Approve</button>
                          <button onClick={() => handleReject(index)} className='btn btn-danger ml-2'>Reject</button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='text-danger font-bold text-center'>No leave request available...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
export default HODpage;
