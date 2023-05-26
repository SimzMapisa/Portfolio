import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className='relative mt-56'>
			<Image
				src='/about-me.svg'
				alt='about sibarashe mapisa'
				width='1024'
				height='400'
				className='w-full'
			/>
			<div className='max-w-6xl mx-auto flex justify-center absolute top-1/3 left-1/3'>
				{/* <Image
					className='absolute top-[-500px] left-[-200px] z-0'
					src='/simba.png'
					alt='simba mapisa'
					width='500'
					height='200'
				/> */}
				<div className='w-1/2'>
					<h3 className='text-[150px] uppercase font-extrabold absolute top-[-40px] z-0 text-[#1f172e]'>
						Whoami
					</h3>
					<h4 className='text-slate-100 font-bold text-4xl relative z-10'>
						About Me
					</h4>
					<p className='mt-4 text-slate-300 relative z-10 leading-7'>
						The purpose of lorem ipsum is to create a natural looking block of
						text (sentence, paragraph, page, etc.) that doesn't distract from
						the layout. A practice not without controversy, laying out pages
						with meaningless filler text can be very useful when the focus is
						meant to be on design, not content.
					</p>
					<p className='mt-4 text-slate-300 leading-7'>
						The purpose of lorem ipsum is to create a natural looking block of
						text (sentence, paragraph, page, etc.) that doesn't distract from
						the layout. A practice not without controversy, laying out pages
						with meaningless filler text can be very useful when the focus is
						meant to be on design, not content.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
