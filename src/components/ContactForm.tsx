'use client'

import React, { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const ContactForm = () => {
    // State to manage form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        query: '',
    });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to an API
        console.log('Form Data Submitted:', formData);
        // Optionally, you can reset the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            query: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-amber-500 h-32 md:h-60 lg:h-72"></div>
                <div className="p-6 md:p-8 lg:p-12">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Get in Touch</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label className="block text-sm font-medium text-gray-700">FIRST NAME</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter first name..."
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium text-gray-700">LAST NAME</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter last name..."
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium text-gray-700">EMAIL</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email..."
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium text-gray-700">PHONE NUMBER</Label>
                                <Input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Enter phone number..."
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Label className="block text-sm font-medium text-gray-700">WHAT DO YOU HAVE IN MIND</Label>
                                <Textarea
                                    name="query"
                                    placeholder="Enter your query..."
                                    value={formData.query}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                ></Textarea>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </Button>
                    </form>
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <BsGoogle className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm