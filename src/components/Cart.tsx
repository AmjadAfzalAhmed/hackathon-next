'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import cart from '@/components/data/cart.json'



export default function ProductRow()
 {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header row */}
      <div className="min-w-[320px] max-w-[1320px] mb-2">
        <div className="flex items-center justify-between px-4">
          <div className="flex-1">
            <span className="font-semibold">Product</span>
          </div>
          <div className="flex-shrink-0 w-24 text-center">
            <span className="font-semibold">Price</span>
          </div>
          <div className="flex-shrink-0 w-32 text-center">
            <span className="font-semibold">Quantity</span>
          </div>
          <div className="flex-shrink-0 w-24 text-center">
            <span className="font-semibold">Total</span>
          </div>
          <div className="flex-shrink-0 w-16 text-center">
            <span className="font-semibold">Action</span>
          </div>
        </div>
      </div>

      {/* Product row */}
      <div className="min-w-[320px] max-w-[1320px] h-[120px] mx-auto bg-white rounded-lg shadow-md">
      {cart.map((cart) => (
        <div key={cart.id} className="flex items-center justify-between h-full px-4">
          
          <div  className="flex items-center space-x-4 flex-1">
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image
                src={cart.image}
                alt={cart.alternate}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{cart.name}</h3>
              {/* <p className="text-sm text-gray-600">{description}</p> */}
              <div className="flex items-center mt-1">
                <Image src={cart.image1} alt="stars" width={80} height={10}/>
              </div>
            </div>
          </div>

          {/* Column 2: Price */}
          <div className="flex-shrink-0 w-24 text-center">
            <span className="text-lg font-bold">${cart.price.toFixed(2)}</span>
          </div>

          {/* Column 3: Quantity */}
          <div className="flex-shrink-0 w-32">
            <div className="flex items-center justify-center border rounded-md">
              <button
                onClick={decrementQuantity}
                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Column 4: Total Price */}
          <div className="flex-shrink-0 w-24 text-center">
            <span className="text-lg font-bold">
            ${(cart.price * quantity).toFixed(2)}
            </span>
          </div>
        

          {/* Column 5: Remove Button */}
          <div className="flex-shrink-0 w-16 flex justify-center">
            <button className="text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

