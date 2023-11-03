'use client'
import { Product } from '@/types'
import Image from 'next/image';
import React from 'react'
import IconButton from './icon-button';
import { Expand } from 'lucide-react'

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
  data
}) => {
  return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      <div className='aspect-square rounded-xl bg-gray-10 relative'>
        <Image 
          src={data?.images?.[0]?.url}
          fill
          alt='image'
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton 
              onClick={() => {}}
              icon={<Expand size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard