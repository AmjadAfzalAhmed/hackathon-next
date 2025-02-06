'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsCart3 } from 'react-icons/bs'

const CartIcon = () => {
    const [isclient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [isclient]);
    
    if (!isclient) {
        return null;
    }
    return (
<div className='w-[120px] flex items-center text-sm gap-2 px-2 py-2 rounded-md shadow-md hover:shadow-none hoverEffect'>
    <Link href='shop/shoppingcart' className='flex items-center gap-3'>
     
        <div>
            <BsCart3 className='text-gray-200 w-6 h-6' />
        </div>

        
        <div className='flex flex-col justify-between px-2'>      

            <p className='text-xs font-semibold text-gray-200'>
                <span className='font-bold'>0</span> items
            </p>            
            <p className='font-mediuim text-gray-200'>Cart</p>
        </div>
    </Link>
    
</div>


    )
}

export default CartIcon