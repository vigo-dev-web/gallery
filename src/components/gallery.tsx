'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import images from '@/data/image'

interface GalleryProps {}

const Gallery: FC<GalleryProps> = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	return (
		<>
			{images.map((image, idx) => (
				<div
					className={`relative overflow-hidden cursor-pointer
            transition-all duration-300 ease-in-out h-96
            ${idx === currentIndex ? 'w-1/2' : 'w-1/4'}`}
					key={idx}
					onClick={() => setCurrentIndex(idx)}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent z-10 rounded-md" />
					<span className='absolute top-4 left-4 text-white border-1 border-white rounded-full w-12 h-12 flex justify-center items-center z-20'>
						{idx + 1}
					</span>
					<Image
						src={image.src}
						alt={image.alt}
						width={900}
						height={600}
						className='w-full h-full object-cover rounded-md'
						priority={idx === 0}
					/>
					{(idx === 0 && idx === currentIndex) && (
						<div className='absolute bottom-4 left-4 text-white pr-1 z-20'>
							<h3 className='mb-2  sm:text-3xl text-xl font-medium'>Consultation & design</h3>
							<p className='md:leading-5 leading-4'>Start with a free in-home or showroom consultation.</p>
						</div>
					)}
				</div>
			))}
		</>
	)
}
export default Gallery
