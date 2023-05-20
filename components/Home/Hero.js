import Image from 'next/image';
import React from 'react';

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
				<div className='relative z-10 py-40 grid grid-cols-12 max-w-6xl mx-auto'>
					<div className='col-span-6'>
						<h1 className='text-5xl text-slate-800 font-extrabold pb-4'>
							I design and develop good looking websites and apps that actually
							work.
						</h1>
						<p className='leading-7 text-slate-600'>
							I specialize in designing and developing visually stunning
							websites and apps that deliver seamless functionality and
							exceptional user experiences. From elegant websites to
							cutting-edge mobile applications, my work brings your vision to
							life, ensuring it not only looks good but also works flawlessly.
							Experience the perfect blend of aesthetics and functionality for
							your digital needs.
						</p>
						<button className='bg-blue-900 text-white text-lg mt-5 px-8 py-3 rounded-md'>
							My Work
						</button>
					</div>
					<div className='col-span-6'>
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
