import React from 'react';
import Header from '../components/Header';

const crew = () => {
	return (
		<section>
			<Header />
			<main className='grid-container grid-container--crew flow'>
				<h2 className='numbered-title'>
					<span>02</span>Meet your crew
				</h2>
				<div className='dot-indicators flex'>
					<button aria-selected='true'>
						<span className='sr-only'>slide</span>
					</button>
					<button>
						<span className='sr-only'></span>
					</button>
					<button>
						<span className='sr-only'></span>
					</button>
					<button>
						<span className='sr-only'></span>
					</button>
				</div>

				<article className='crew-details'>
					<h2 className='uppercase fs-700'>Commander</h2>
					<p className='uppercase fs-600'> Douglas Hurley</p>
					<p>
						Douglas Gerald Hurley is an American engineer, former
						Marine Corps pilot and former NASA astronaut. He
						launched into space for the third time as commander of
						Crew Dragon Demo-2.
					</p>
				</article>

				<img src='assets/crew/image-douglas-hurley.png' alt='' />
			</main>
		</section>
	);
};

export default crew;
