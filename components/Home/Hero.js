import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

const Hero = () => {
	return (
		<>
			<div className='flex justify-center'>
				<Image
					className='absolute mt-36 z-0'
					src='/Elements.svg'
					width='1200'
					height='1200'
					alt='background design elements'
				/>
				<div className='relative px-4 z-10 py-20 lg:py-40 md:grid md:grid-cols-12 max-w-6xl mx-auto'>
					<div className='md:col-span-6 mb-6'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl text-slate-800 font-extrabold pb-4'>
							I design and develop good looking websites and apps that actually
							work.
						</h1>
						<p className='leading-7 mb-6 text-slate-600'>
							I specialize in designing and developing visually stunning
							websites and apps that deliver seamless functionality and
							exceptional user experiences. From elegant websites to
							cutting-edge mobile applications, my work brings your vision to
							life, ensuring it not only looks good but also works flawlessly.
							Experience the perfect blend of aesthetics and functionality for
							your digital needs.
						</p>
						{/* <Button
							classes='bg-blue-900 text-white text-lg mt-5 px-8 py-3 rounded-md'
							title='My Work'
						/> */}
						<Link
							href='/portfolio'
							className='bg-blue-900 text-white text-lg mt-5 px-8 py-3 rounded-md'
						>
							My Work
						</Link>
					</div>
					<div className='flex justify-center md:col-span-6'>
						<Image
							src='/simbarashe-mapisa-hero-img.svg'
							alt='code describing simbas skills'
							width='600'
							height='600'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
