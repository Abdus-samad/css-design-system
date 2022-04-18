import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import { navigation } from '../data';

export default function Indexpage() {
	const [drawer, setDrawer] = useState(false);
	const handleClick = () => setDrawer(!drawer);

	return (
		<section className='home'>
			<Head>
				<title>Space X</title>
			</Head>
			<header className='primary-header flex '>
				<div>
					<img
						src='/assets/shared/logo.svg'
						alt='space tourism logo'
						className='logo'
					/>
				</div>
				<button onClick={handleClick} className='mobile-nav-toggle'>
					<span className='sr-only' aria-expanded='false'>
						Menu
					</span>
				</button>
				<nav>
					<ul
						id='primary-navigation'
						className={
							drawer
								? 'primary-navigation active flex underline-indicators'
								: 'primary-navigation underline-indicators flex'
						}>
						<button
							onClick={handleClick}
							className='mobile-nav-toggle-close'>
							<span className='sr-only' aria-expanded='false'>
								Menu
							</span>
						</button>
						{navigation.map((link, index) => (
							<Header link={link} key={index} />
						))}
					</ul>
				</nav>
			</header>
			<main id='main' className='grid-container grid-container--home'>
				<div>
					<h1 className='text-accent fs-500 uppercase letter-spacing-1'>
						So, you want to travel to
						<span className='d-block fs-900 text-white'>
							Space{' '}
						</span>
					</h1>

					<p>
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div>
					<a
						href=''
						className='large-button uppercase text-dark bg-white'>
						Explore
					</a>
				</div>
			</main>
		</section>
	);
}
