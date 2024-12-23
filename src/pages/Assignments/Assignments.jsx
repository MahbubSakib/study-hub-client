import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';

const Assignments = () => {
    const [assignments, setAssignments] = useState();

    // fetching data using async await
    const fetchAssignmentData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/assignments`);
        setAssignments(data);
    }

    useEffect(() => {
        fetchAssignmentData();
    }, [])

    console.log(assignments);
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='w-10/12 mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
                {
                    assignments?.map(assignment => <AssignmentCard 
                    key={assignment._id} 
                    assignment={assignment}
                    allAssignments={fetchAssignmentData}
                    >
                    </AssignmentCard>)
                }
            </div>
        </div>
        </div>
        
    );
};

export default Assignments;