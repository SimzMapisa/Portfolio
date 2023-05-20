import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import RecentWork from '@/components/Home/RecentWork';
import Image from 'next/image';
import React from 'react';

const Home = () => {
	return (
		<>
			<Hero />
			<RecentWork />
			<About />
		</>
	);
};

export default Home;
