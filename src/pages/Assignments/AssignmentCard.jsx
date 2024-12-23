import React from 'react';

const AssignmentCard = ({ assignment }) => {
    return (
        <div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                    src={assignment.image}
                    alt={assignment.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Marks:</span> {assignment.marks}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Difficulty:</span>{' '}
                        <span
                            className={`inline-block px-2 py-1 rounded text-white text-xs ${assignment.difficulty === 'Easy'
                                    ? 'bg-green-500'
                                    : assignment.difficulty === 'Medium'
                                        ? 'bg-yellow-500'
                                        : 'bg-red-500'
                                }`}
                        >
                            {assignment.difficulty}
                        </span>
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            // onClick={onView}
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            View
                        </button>
                        <button
                            // onClick={onUpdate}
                            className="text-yellow-500 hover:text-yellow-700 font-medium"
                        >
                            Update
                        </button>
                        <button
                            // onClick={onDelete}
                            className="text-red-500 hover:text-red-700 font-medium"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;