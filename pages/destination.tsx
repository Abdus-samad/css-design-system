import Head from 'next/head';
import { useState } from 'react';
import DestinationPage from '../components/destination/DestinationPage';
import { Panel } from '../components/destination/Panel';
import Header from '../components/Header';
import { navigation } from '../data';

const Destination = () => {
	const [drawer, setDrawer] = useState(false);
	const handleClick = () => setDrawer(!drawer);

	return (
		<section className='destination'>
			<Head>
				<title>Destination</title>
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
			<main
				id='main'
				className='grid-container grid-container--destination flow'>
				<h1 className='numbered-title'>
					<span>01</span> Pick your destination
				</h1>

				<DestinationPage>
					<Panel title='Moon'>
						<img
							src='/assets/destination/image-moon.png'
							alt='Moon'
						/>
						<article className='destination-info'>
							<h2 className='fs-800 uppercase'>Moon</h2>
							<p>
								See our planet as you’ve never seen it before. A
								perfect relaxing trip away to help regain
								perspective and come back refreshed. While
								you’re there, take in some history by visiting
								the Luna 2 and Apollo 11 landing sites.
							</p>
							<div className='flex destination-meta'>
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										Avg. distance
									</h3>
									<p className='text-accent fs-500 uppercase'>
										384,400 km
									</p>
								</div>{' '}
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										{' '}
										Est. travel time
									</h3>
									<p className='text-accent fs-500 uppercase'>
										3 days
									</p>
								</div>
							</div>
						</article>
					</Panel>

					<Panel title='Europa'>
						<img
							src='/assets/destination/image-europa.png'
							alt=''
						/>
						<article className='destination-info'>
							<h2 className='fs-800 uppercase'>Europa</h2>
							<p>
								The smallest of the four Galilean moons orbiting
								Jupiter, Europa is a winter lover’s dream. With
								an icy surface, it’s perfect for a bit of ice
								skating, curling, hockey, or simple relaxation
								in your snug wintery cabin.
							</p>
							<div className='flex destination-meta'>
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										Avg. distance
									</h3>
									<p className='text-accent fs-500 uppercase'>
										628 mil. km
									</p>
								</div>{' '}
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										{' '}
										Est. travel time
									</h3>
									<p className='text-accent fs-500 uppercase'>
										3 years
									</p>
								</div>
							</div>
						</article>
					</Panel>

					<Panel title='Mars'>
						<article title='Mars' className='destination-info'>
							<h2 className='fs-800 uppercase'>Mars</h2>
							<p>
								Don’t forget to pack your hiking boots. You’ll
								need them to tackle Olympus Mons, the tallest
								planetary mountain in our solar system. It’s two
								and a half times the size of Everest!
							</p>
							<div className='flex destination-meta'>
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										Avg. distance
									</h3>
									<p className='text-accent fs-500 uppercase'>
										{' '}
										225 mil. km
									</p>
								</div>{' '}
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										{' '}
										Est. travel time
									</h3>
									<p className='text-accent fs-500 uppercase'>
										9 months
									</p>
								</div>
							</div>
						</article>
						<img src='/assets/destination/image-mars.png' alt='' />
					</Panel>
					<Panel title='Titan'>
						<article className='destination-info'>
							<h2 className='fs-800 uppercase'>Titan</h2>
							<p>
								The only moon known to have a dense atmosphere
								other than Earth, Titan is a home away from home
								(just a few hundred degrees colder!). As a
								bonus, you get striking views of the Rings of
								Saturn.
							</p>
							<div className='flex destination-meta'>
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										Avg. distance
									</h3>
									<p className='text-accent fs-500 uppercase'>
										1.6 bil. km
									</p>
								</div>{' '}
								<div>
									<h3 className='text-accent fs-200 uppercase'>
										{' '}
										Est. travel time
									</h3>
									<p className='text-accent fs-500 uppercase'>
										7 years
									</p>
								</div>
							</div>
						</article>
						<img src='/assets/destination/image-titan.png' alt='' />
					</Panel>
				</DestinationPage>
			</main>
		</section>
	);
};

export default Destination;
