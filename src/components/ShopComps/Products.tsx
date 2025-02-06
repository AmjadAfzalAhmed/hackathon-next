'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { client, foodQuery } from '@/sanity/lib/client';
import Sidebar from "./Sidebar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

type Foods = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  description: string; // Added description for more details
};

type CartItem = {
  food: Foods;
  quantity: number;
};

const ProductPage: React.FC = () => {
  const [foodData, setFoodData] = useState<Foods[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedFood, setSelectedFood] = useState<Foods | null>(null); // Selected food item
  const [cart, setCart] = useState<CartItem[]>([]); // Cart state

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(foodQuery);
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  // State for sorting
  const [sortBy, setSortBy] = useState<string>("priceLowToHigh");

  // State for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 6; // Number of products per page

  // Sort products based on the selected option
  const sortedFoods: Foods[] = [...foodData].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastFood: number = currentPage * productsPerPage;
  const indexOfFirstFood: number = indexOfLastFood - productsPerPage;
  const currentFoods: Foods[] = sortedFoods.slice(indexOfFirstFood, indexOfLastFood);

  // Change page
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // Handle food item selection
  const handleFoodSelect = (food: Foods): void => {
    setSelectedFood(food);
  };

  // Handle adding item to cart
  const handleAddToCart = (food: Foods): void => {
    const existingCartItem = cart.find((item) => item.food._id === food._id);

    if (existingCartItem) {
      // If item already exists in cart, increase its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.food._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item is not in cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { food, quantity: 1 }]);
    }
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (foodId: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item.food._id !== foodId));
  };

  // Calculate total price of cart
  const totalPrice = cart.reduce((total, item) => total + item.food.price * item.quantity, 0);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen bg-stone-900 text-white">Loading...</div>; // Add a loading state
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-20 p-6">

      {/* Main Content (Product Grid and Details) */}

      <div className="w-full lg:w-[70%] min-h-screen text-white">
        {/* Individual Product Page */}
        {selectedFood && (
          <div className="fixed inset-0 bg-white p-6 overflow-y-auto z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                className="mb-6 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                onClick={() => setSelectedFood(null)}
              >
                &larr; Back to Menu
              </button>

              {/* Product Details */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Product Image with Zoom Animation */}
                <div className="relative w-full h-96 overflow-hidden">
                  <Image
                    src={selectedFood.imageUrl}
                    alt={selectedFood.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* Product Details with Fade-In Animation */}
                <div className="p-6 animate-fade-in">
                  <h2 className="text-3xl font-bold mb-4 text-stone-900">{selectedFood.name}</h2>
                  <p className="text-stone-600 mb-4">{selectedFood.category}</p>
                  <p className="text-stone-600 mb-6">{selectedFood.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-stone-900">${selectedFood.price.toFixed(2)}</span>
                    <button
                      className="px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                      onClick={() => handleAddToCart(selectedFood)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Product Grid */}
        {!selectedFood && (
          <>
            {/* Sort and Select Options */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <span>Sort By:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="p-2 border border-stone-700 rounded-md bg-stone-800 text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-stone-800 text-white">
                    <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                    <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {currentFoods.map((food: Foods) => (
                <div
                  key={food._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 animate-float"
                  onClick={() => handleFoodSelect(food)}
                >
                  <Image
                    src={food.imageUrl}
                    alt={food.name}
                    width={250}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-stone-900">{food.name}</h3>
                    <p className="text-stone-600 mb-4">{food.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-stone-900">${food.price.toFixed(2)}</span>
                      <button
                        className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering the parent onClick
                          handleAddToCart(food);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Display */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-stone-900">Your Cart</h2>
              {cart.length === 0 ? (
                <p className="text-stone-600">Your cart is empty.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item.food._id} className="flex items-center mb-4 p-4 bg-stone-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      {/* Product Image */}
                      <Image
                        src={item.food.imageUrl}
                        alt={item.food.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      {/* Product Details */}
                      <div className="flex-1 ml-4">
                        <span className="font-semibold text-stone-900">{item.food.name}</span>
                        <span className="text-stone-600 ml-2">(x{item.quantity})</span>
                      </div>
                      {/* Price */}
                      <div className="mx-4">
                        <span className="font-bold text-stone-900">${(item.food.price * item.quantity).toFixed(2)}</span>
                      </div>
                      {/* Remove Button */}
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => handleRemoveFromCart(item.food._id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {/* Total Price */}
                  <div className="border-t pt-4">
                    <span className="text-xl font-bold text-stone-900">Total: ${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-stone-700 rounded-l-md hover:bg-stone-800 text-amber-500 disabled:opacity-50"
                >
                  Previous
                </button>
                {[...Array(Math.ceil(sortedFoods.length / productsPerPage)).keys()].map((number) => (
                  <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                    className={`px-4 py-2 border-t border-b border-stone-700 hover:bg-stone-800 text-amber-500 ${currentPage === number + 1 ? "bg-amber-500" : ""
                      }`}
                  >
                    {number + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(sortedFoods.length / productsPerPage)}
                  className="px-4 py-2 border border-stone-700 rounded-r-md hover:bg-stone-800 text-white disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[35%]">
        <Sidebar />
      </div>
    </div>
  )
}

export default ProductPage