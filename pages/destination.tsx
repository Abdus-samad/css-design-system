import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DestinationMars from '../components/destination/DestinationMars';
import Header from '../components/Header';
import { Tabs } from '../components/Tabs';
import { destinations as PortfolioData } from '../data';
import { Category } from '../type';

const destination = () => {
	const [portfolio, setPortfolio] = useState(PortfolioData);
	const [active, setActive] = useState('Moon');

	const handlerFilterCategory = (category: Category | 'all') => {
		if (category === 'all') {
			setPortfolio(PortfolioData);
			setActive(category);
			return;
		}

		const newArray = PortfolioData.filter((portfolio) =>
			portfolio.category.includes(category)
		);

		setPortfolio(newArray);
		setActive(category);
	};

	return (
		<section className='destination'>
			{' '}
			<a href='#main' className='skip-to-content'>
				Skip to content
			</a>
			<Header />
			<main
				id='main'
				className='grid-container grid-container--destination flow'>
				<h1 className='numbered-title'>
					<span>01</span> Pick your destination
				</h1>

				<Tabs
					handlerFilterCategory={handlerFilterCategory}
					active={active}
				/>
				{portfolio.map((project, index) => (
					<DestinationMars key={index} portfolio={project} />
				))}
			</main>
		</section>
	);
};

export default destination;
