import React from "react";
import { FaUsers, FaTasks, FaBookOpen } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaUsers className="text-4xl text-blue-700" />,
            title: "Collaborative Learning",
            description: "Connect with peers and share knowledge to tackle challenges together.",
        },
        {
            icon: <FaTasks className="text-4xl text-green-700" />,
            title: "Assignment Tracking",
            description: "Easily manage and track your assignments in one place.",
        },
        {
            icon: <FaBookOpen className="text-4xl text-red-700" />,
            title: "Assignment Checking and Grading",
            description: "Check and grade your friends' assignments to foster a collaborative learning environment and track progress together.",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className=" w-10/12 mx-auto">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
