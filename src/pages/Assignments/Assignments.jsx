import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AssignmentCard from './AssignmentCard';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [difficulty, setDifficulty] = useState('');
    const [search, setSearch] = useState('');

    // Fetch assignments with optional filters
    const fetchAssignmentData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/assignments`, {
                params: { difficulty, search },
            });
            setAssignments(data);
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    useEffect(() => {
        fetchAssignmentData();
    }, [difficulty, search]);

    return (
        <div className="bg-[#F8F8F8]">
            <div className="w-10/12 mx-auto py-5">
                {/* Filter and Search Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-5">
                    {/* Difficulty Dropdown */}
                    <select
                        className="p-2 border rounded-md mb-3 md:mb-0"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="">All Levels</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search assignments..."
                        className="p-2 border rounded-md"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Assignments */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {assignments.map((assignment) => (
                        <AssignmentCard
                            key={assignment._id}
                            assignment={assignment}
                            allAssignments={fetchAssignmentData}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Assignments;
