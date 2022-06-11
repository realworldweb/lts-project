import React, { useState, cloneElement, Children } from 'react';

import dynamic from 'next/dynamic';

import Header from '../components/header';

const Footer = dynamic(() => import('../components/footer'));

export default function Front({ children }) {
	const [search, setSearch] = useState(null);
	const handleSearch = (e) => {
		e.preventDefault();
	
		setSearch(e.target.searchInput.value);
		
	};

	return (
		<>
			<div
				className='d-flex flex-column justify-content-between mx-auto'
				id='contentContainer'
			>
				<header>
					<Header method={handleSearch} />
				</header>
				<main id='main' className='d-block position-relative'>
					{Children.map(children, (child) =>
						cloneElement(child, {
							search: search,
						})
					)}
					
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
