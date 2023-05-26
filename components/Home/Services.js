import React from 'react';
import ServiceCard from '../ServiceCard';

const Services = () => {
	return (
		<div className='max-w-6xl mx-auto my-20 py-20 flex '>
			<div className='flex flex-col flex-1 basis-2/5'>
				<div className='absolute'>
					<h2 className='text-9xl uppercase font-extrabold leading-[120px] text-[#f8f8f8] flex flex-col tracking-tighter'>
						Serv <span>ices</span>
					</h2>
				</div>
				<div className='relative z-10 h-full flex flex-col justify-center pr-20'>
					<h4 className='text-4xl font-extrabold text-slate-800 pb-4'>
						What I do
					</h4>
					<p className='text-slate-600'>
						A practice not without controversy, laying out pages with design,
						not content.
					</p>
				</div>
			</div>
			<div className='flex flex-1 items-center basis-3/5 h-full justify-center'>
				<ServiceCard
					title='Web Development'
					serviceDescription='Here are a few projects I have worked on and crafted with love to see more, visit my portfolio page.'
					iconUrl='/webdev-ico.svg'
					margin='p-4'
				/>
				<ServiceCard
					title='UI Design'
					serviceDescription='Here are a few projects I have worked on and crafted with love to see more, visit my portfolio page.'
					iconUrl='/UI-design-ico.svg'
				/>
			</div>
		</div>
	);
};

export default Services;
