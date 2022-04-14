import Head from 'next/head';
import React from 'react';

const DestinationMoon = () => {
	return (
		<>
			<Head>
				<title>Destination</title>
			</Head>

			<img src='/assets/destination/image-moon.png' alt='' />

			<article className='destination-info'>
				<h2 className='fs-800 uppercase'>Moon</h2>
				<p>
					See our planet as you’ve never seen it before. A perfect
					relaxing trip away to help regain perspective and come back
					refreshed. While you’re there, take in some history by
					visiting the Luna 2 and Apollo 11 landing sites.
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
						<p className='text-accent fs-500 uppercase'> 3 days</p>
					</div>
				</div>
			</article>
		</>
	);
};

export default DestinationMoon;
