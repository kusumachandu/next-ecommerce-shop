import React from 'react'
import Image from 'next/image'
import { Tab } from "@headlessui/react"

import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'

interface GalleryTab {
  image: ImageType
}

const GalleryTab: React.FC<GalleryTab> = ({
  image
}) => {
  return (
    <Tab className="flex aspect-square relative cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div className=''>
          <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
            <Image 
              fill
              src={image.url}
              alt=''
              className='object-cover object-center'
            />
          </span>
          <span className={
              cn('absolute inset-0 rounded-md ring-2 ring-offset-2', 
                selected ? 'ring-black' : 'ring-transparent' 
              )
            } 
          />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab