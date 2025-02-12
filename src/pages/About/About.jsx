import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
            <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
                    About Us
                </h1>
                <p className="text-lg text-gray-700 text-center mb-4">
                    Welcome to <span className="font-semibold">Study Hub</span> – your all-in-one platform for interactive and collaborative learning. We believe education should be{" "}
                    <span className="text-blue-500 font-semibold">engaging, organized, and accessible</span>, empowering students to{" "}
                    <span className="text-blue-500 font-semibold">track progress, manage assignments, and collaborate effortlessly</span>.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">
                    🚀 Our Mission
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                    Our mission is to simplify academic management by providing powerful tools for students to{" "}
                    <span className="font-semibold text-blue-500">track, review, and improve their learning journey.</span> Whether you're working on assignments, grading peer submissions, or collaborating with classmates, Study Hub makes the process seamless and efficient.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">
                    📌 Why Choose Study Hub?
                </h2>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                    <li>
                        ✅ <span className="font-semibold text-blue-500">Collaborative Learning</span> – Connect with peers, share insights, and tackle challenges together.
                    </li>
                    <li>
                        ✅ <span className="font-semibold text-blue-500">Assignment Tracking</span> – Stay organized with real-time updates on assignment progress.
                    </li>
                    <li>
                        ✅ <span className="font-semibold text-blue-500">Difficulty Level Filters</span> – Easily find assignments based on difficulty (Easy, Medium, Hard).
                    </li>
                    <li>
                        ✅ <span className="font-semibold text-blue-500">Quick Search</span> – Locate assignments in seconds using keywords or descriptions.
                    </li>
                    <li>
                        ✅ <span className="font-semibold text-blue-500">Peer Grading</span> – Review and grade other students' submissions to foster collective learning.
                    </li>
                    <li>
                        ✅ <span className="font-semibold text-blue-500">Smooth Navigation</span> – Enjoy a clean and structured interface with paginated views for better data management.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">
                    📚 Join the Study Hub Community!
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                    Whether you're a student looking to <span className="text-blue-500 font-semibold">streamline your study workflow</span> or a learner eager to <span className="text-blue-500 font-semibold">engage with others</span>, <span className="font-semibold">Study Hub</span> is here to help.
                </p>

                <p className="text-xl font-bold text-center text-blue-600 mt-6">
                    Let’s learn, collaborate, and succeed—together! 🎓
                </p>
            </div>
        </div>
    );
};

export default About;