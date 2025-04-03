'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { FiPaperclip } from "react-icons/fi";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    introduction: string;
    firstNameFile: File | null;
    linkedinUrl: string;
    portfolioLink: string;
}

const ApplicationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        introduction: '',
        firstNameFile: null,
        linkedinUrl: '',
        portfolioLink: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({
                ...formData,
                firstNameFile: e.target.files[0]
            });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add API submission logic here
    };

    return (
        <div className="w-full mx-auto px-4 md:px-28 py-8">
            <div className="mb-6">
                <p className="text-primary2 text-[14px] font-medium mb-1">Quick Application</p>
                <h1 className="text-3xl font-bold text-gray-900">Apply Now</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <textarea
                        name="introduction"
                        value={formData.introduction}
                        onChange={handleInputChange}
                        placeholder="Introduce Yourself"
                        className="w-full px-4 py-3 rounded-3xl  bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1 min-h-32"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            name="firstNameDisplay"
                            value={formData.firstNameFile ? formData.firstNameFile.name : "First Name"}
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none pr-12 cursor-pointer"
                            readOnly
                        />
                        <label htmlFor="firstNameFile" className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                            <FiPaperclip/>
                        </label>
                        <input
                            id="firstNameFile"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            name="linkedinUrl"
                            value={formData.linkedinUrl}
                            onChange={handleInputChange}
                            placeholder="LinkedIn URL"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            name="portfolioLink"
                            value={formData.portfolioLink}
                            onChange={handleInputChange}
                            placeholder="Portfolio Link"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                        />
                    </div>
                </div>

                <div>
                    <CustomButton label={"Next"} primary={true} onClick={() => { }} />
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;