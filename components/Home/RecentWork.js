import React from 'react';
import Portfolio from './../../app/portfolio/page';
import Link from 'next/link';
import ProjectCard from '../ProjectCard';
import Image from 'next/image';

const RecentWork = () => {
	return (
		<div className='max-w-6xl mx-auto py-20 mb-20 flex'>
			<div>
				<div className='absolute'>
					<h2 className='text-[148px] uppercase font-extrabold leading-[120px] text-[#f8f8f8] flex flex-col tracking-tighter'>
						Port <span>folio</span>
					</h2>
					<Image
						className='absolute right-[-80px] bottom-[-180px]'
						src='/arrow1.png'
						height='200'
						width='200'
						alt='arrow pointing to project card'
					/>
				</div>
				<div className='h-full flex flex-col justify-center pr-40'>
					<h3 className='relative z-10 text-4xl font-bold pb-4 text-slate-800'>
						Some of my work
					</h3>
					<p className='relative z-10 leading-7 text-slate-600'>
						Here are a few projects I have worked on and crafted with love to
						see more, visit my{' '}
						<Link href='/portfolio' className='font-bold text-blue-800'>
							portfolio page.
						</Link>{' '}
					</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex'>
					<ProjectCard
						margin='mr-4'
						title='Airbnb UI Clone'
						type='UX/UI Design Project'
						techStack='Figma, After Effects'
						imgUrl='/airbnb-ui.png'
					/>

					<ProjectCard
						title='Netflix Clone'
						type='Development'
						techStack='Nodejs, firebase, Reactjs, IMDB API'
						imgUrl='/NetflixDev.png'
					/>
				</div>
				<div className='mt-4'>
					<Link
						href='/portfolio'
						className='flex items-center text-lg text-blue-800 font-bold'
					>
						View more <span className='text-5xl pl-4'>&#10230;</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecentWork;
