import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function LeaveDetails() {
    const navigate = useNavigate();
    const [userLeaves, setUserLeaves] = useState([]);
    const [formData, setFormData] = useState({
        startDate: "",
        endDate: "",
        reason: ""
    });

    const handleCancel = () => {
        navigate('/staffPage');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLeave = {
            startDate: formData.startDate,
            endDate: formData.endDate,
            reason: formData.reason,
            status: "pending",
        };

        const existingLeaves = JSON.parse(localStorage.getItem("userLeaves")) || [];
        existingLeaves.push(newLeave);
        localStorage.setItem("userLeaves", JSON.stringify(existingLeaves));

        setUserLeaves(existingLeaves);
        navigate('/staffPage', { leaveData: existingLeaves });

        setFormData({
            startDate: "",
            endDate: "",
            reason: "",
        })
        newLeave.status = "pending";
        navigate('/leaveDetails')

    };

    const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData, [fieldName]: value,
        }))
    }
    return (
        <div className='container'>
            <div className=' col-md-8 col-lg-6 col-xl-4 offset-md-2 offset-lg-3 offset-xl-4 mt-4 p-4 shadow'>
                <h1 className='text-center mb-3 font-weight-bold'>Leave Details</h1>
                <form>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <label className='d-block' htmlFor='startDate'>From</label>
                            <DatePicker
                                selected={formData.startDate}
                                onChange={(date) => handleInputChange("startDate", date)}
                                selectsStart
                                startDate={formData.startDate}
                                endDate={formData.endDate}
                                value={formData.startDate}
                                className='form-control'
                            />
                        </div>
                        <div className='form-group col-6'>
                            <label className='d-block' htmlFor='endDate'>To</label>
                            <DatePicker
                                selected={formData.endDate}
                                onChange={(date) => handleInputChange("endDate", date)}
                                selectsEnd
                                startDate={formData.startDate}
                                endDate={formData.endDate}
                                value={formData.endDate}
                                minDate={formData.startDate}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-12'>
                            <label htmlFor='reason'>Reason:</label>
                            <textarea type='text'
                                id='reason'
                                className='form-control'
                                value={formData.reason}
                                onChange={(e) => handleInputChange("reason", e.target.value)}
                                rows='3' />
                        </div>
                        <div className='text-right col-12'>
                            <button type='button' className='btn  mr-2' onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type='button' style={{ backgroundColor: "green" }} className='btn btn-success' onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default LeaveDetails;
