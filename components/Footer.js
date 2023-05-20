import React from 'react';

const Footer = () => {
	var today = new Date();
	var year = today.getFullYear();
	return (
		<div className='w-full stick bottom-0'>
			<div className='flex max-w-6xl py-4 mx-auto justify-center border-t border-slate-100'>
				<span className='font-bold'>JsEnthusiast</span> {year} .All rights
				reserved.
			</div>
		</div>
	);
};

export default Footer;
