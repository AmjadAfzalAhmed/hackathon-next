'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg","/images/hero5.png"];


export default function DishSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slower rotation timing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-transparent relative">
      
      <div className="relative w-[600px] h-[600px] flex justify-center items-center aspect-square"> {/* Ensures circular shape */}
        <Image
          key={currentIndex}
          src={images[currentIndex]}
          alt="Main Dish"
          width={600}
          height={600}
          objectFit="cover"
          className="rounded-full shadow-lg transition-opacity duration-1000 ease-in-out"
        />        
        
      </div>
    
    </div>
  );
}




