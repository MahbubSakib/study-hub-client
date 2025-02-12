import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
            <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 text-center mb-4">
                    Have questions, suggestions, or need support? Feel free to reach out to us. We’d love to hear from you! 📩
                </p>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-4">
                        <span className="text-xl">📍</span>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Our Address</h2>
                            <p className="text-gray-700">123 Study Lane, Proxima Centauri, Milkyway Galaxy, 456789</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-xl">📞</span>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
                            <p className="text-gray-700">+1 234 567 890</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-xl">✉️</span>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
                            <p className="text-gray-700">support@studyhub.com</p>
                        </div>
                    </div>
                </div>

                <p className="text-lg text-center text-gray-700 mt-6">
                    📚 We’re here to help—connect with us anytime!
                </p>
            </div>
        </div>
    );
};

export default Contact;