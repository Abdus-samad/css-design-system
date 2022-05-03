import Head from 'next/head';
import { useState } from 'react';
import { Panel } from '../components/destination/Panel';
import CrewPage from '../components/Dot/CrewPage';
import Header from '../components/Header';
import { navigation } from '../data';

const Crew = () => {
	const [drawer, setDrawer] = useState(false);
	const handleClick = () => setDrawer(!drawer);

	return (
		<section className='crew'>
			<Head>
				<title>Crew</title>
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

			<main className='grid-container grid-container--crew flow'>
				<h2 className='numbered-title'>
					<span>02</span>Meet your crew
				</h2>
				<CrewPage>
					<Panel title='commander'>
						<article className='crew-details flow'>
							<header className='flow flow-space--small'>
								<h2 className='fs-600 uppercase'>Commander</h2>
								<p className='fs-700 uppercase'>
									Douglas Hurley
								</p>
							</header>

							<p>
								Douglas Gerald Hurley is an American engineer,
								former Marine Corps pilot and former NASA
								astronaut. He launched into space for the third
								time as commander of Crew Dragon Demo-2.
							</p>
						</article>

						<img
							src='/assets/crew/image-douglas-hurley.png'
							alt=''
						/>
					</Panel>

					<Panel title='The Mission Specialist'>
						<article className='crew-details flow'>
							<header className='flow flow-space--small'>
								<h2 className='fs-600 uppercase'>
									Mission Specialist
								</h2>
								<p className='fs-700 uppercase'>
									Mark Shuttleworth
								</p>
							</header>

							<p>
								Mark Richard Shuttleworth is the founder and CEO
								of Canonical, the company behind the Linux-based
								Ubuntu operating system. Shuttleworth became the
								first South African to travel to space as a
								space tourist.
							</p>
						</article>

						<img
							src='/assets/crew/image-mark-shuttleworth.png'
							alt=''
						/>
					</Panel>

					<Panel title='The pilot'>
						<article className='crew-details flow'>
							<header className='flow flow-space--small'>
								<h2 className='fs-600 uppercase'>Pilot</h2>
								<p className='fs-700 uppercase'>
									Victor Glover
								</p>
							</header>

							<p>
								Pilot on the first operational flight of the
								SpaceX Crew Dragon to the International Space
								Station. Glover is a commander in the U.S. Navy
								where he pilots an F/A-18.He was a crew member
								of Expedition 64, and served as a station
								systems flight engineer.
							</p>
						</article>

						<img
							src='/assets/crew/image-victor-glover.png'
							alt=''
						/>
					</Panel>
					<Panel title='engineer'>
						<article className='crew-details flow'>
							<header className='flow flow-space--small'>
								<h2 className='fs-600 uppercase'>
									Flight Engineer
								</h2>
								<p className='fs-700 uppercase'>
									Anousheh Ansari
								</p>
							</header>

							<p>
								Anousheh Ansari is an Iranian American engineer
								and co-founder of Prodea Systems. Ansari was the
								fourth self-funded space tourist, the first
								self-funded woman to fly to the ISS, and the
								first Iranian in space.
							</p>
						</article>

						<img
							src='/assets/crew/image-anousheh-ansari.png'
							alt=''
						/>
					</Panel>
				</CrewPage>
			</main>
		</section>
	);
};

export default Crew;
