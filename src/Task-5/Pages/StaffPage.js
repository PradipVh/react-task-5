import React from 'react';
import {useNavigate } from 'react-router-dom';

const appliedLeave = JSON.parse(localStorage.getItem('userLeaves')) || [];
console.log(appliedLeave);

function StaffPage() {
  const navigate = useNavigate();
  navigate('/staffPage')

  return (
    <>
      <div className='text-center mt-4'>
      </div>
      <div className="bg-white py-5 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl d-inline text-left">Staff Page</h2>
            <button onClick={() => navigate('/staffPage/leaveDetails')} className='btn btn-primary float-right mt-2'>Apply Leave +</button>
          </div>
          <div className="mx-auto p-5 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {appliedLeave.length > 0 ? (
              appliedLeave.reverse().map((leave, index) => (
                <div key={index} className='shadow p-4'>
                  <div>Start Date: {formatDate(leave.startDate)}</div>
                  <div>End Date: {formatDate(leave.endDate)}</div>
                  <div>Reason: {leave.reason}</div>

                  <div>
                    {leave.status === "Approved" ? (
                      <div>Status: <span className='text-success'>{leave.status}</span></div>
                    ) : leave.status === "Rejected" ? (
                      <div>Status: <span className='text-danger'>{leave.status}</span></div>
                    ) : (
                      <div>Status: <span className='text-warning'>{leave.status}</span></div>
                    )}
                  </div>

                </div>
              ))
            ) : (
              <div className='text-danger text-center font-bold'>No Leave applied yet...</div>
            )}
          </div>
        </div>
      </div>
    </>

  );

}

// Function to format a date string to display only the date (YYYY-MM-DD)
function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default StaffPage;
