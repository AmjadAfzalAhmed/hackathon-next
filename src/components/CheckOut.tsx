'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import tikka from '/public/images/tikka.png'
import Link from 'next/link';

const CheckOut = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        zipCode: '',
        billingAddress: '',
    });

    // State for errors
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone Number is required';
        if (!formData.address1) newErrors.address1 = 'Address 1 is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If no errors, proceed with form submission
        console.log('Form Data Submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Checkout Form */}
                    <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                        <form onSubmit={handleSubmit}>
                            {/* First Name and Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* Address 1 and Address 2 */}
                            <div className="mb-4">
                                <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                                    Address 1
                                </label>
                                <input
                                    type="text"
                                    id="address1"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={formData.address1}
                                    onChange={handleInputChange}
                                />
                                {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                                    Address 2
                                </label>
                                <input
                                    type="text"
                                    id="address2"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={formData.address2}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* City and Zip Code */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                                </div>
                                <div>
                                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                                        Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                    />
                                    {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                                </div>
                            </div>

                            {/* Billing Address */}
                            <div className="mb-6">
                                <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">
                                    Billing Address
                                </label>
                                <input
                                    type="text"
                                    id="billingAddress"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={formData.billingAddress}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between">
                                <Link href="/shop/shoppingcart"
                                    type="button"
                                    className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600"
                                >
                                    Back to Cart
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600"
                                >
                                    Proceed to Shipping
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Image src={tikka} alt="Product 1" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Product 1</p>
                                    <p className="text-sm text-gray-500">Description of product 1</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image src={tikka} alt="Product 2" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Product 2</p>
                                    <p className="text-sm text-gray-500">Description of product 2</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image src={tikka} alt="Product 3" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Product 3</p>
                                    <p className="text-sm text-gray-500">Description of product 3</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-2">
                            <div className="flex justify-between">
                                <p className="text-gray-600">Subtotal</p>
                                <p className="font-medium">$99.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Shipping</p>
                                <p className="font-medium">$5.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Discount</p>
                                <p className="font-medium">-$10.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Tax</p>
                                <p className="font-medium">$8.00</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <p className="text-lg font-bold">$102.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;