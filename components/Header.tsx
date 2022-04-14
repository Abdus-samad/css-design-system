import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';

export const NavItem: FunctionComponent<{
	active: string;
	setActive: Function;
	name: string;
	route: string;
	number: string;
}> = ({ active, name, route, number }) => {
	return active !== route ? (
		<Link href={route}>
			<a className='uppercase text-white letter-spacing-2'>
				<span aria-hidden='true'>{number}</span>
				{name}
			</a>
		</Link>
	) : null;
};

const Header = () => {
	const [drawer, setDrawer] = useState(false);
	const handleClick = () => setDrawer(!drawer);
	const [active, setActive] = useState<string>('');

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActive('Home');
		if (pathname === '/destination') setActive('Destination');
		if (pathname === '/crew') setActive('Crew');
		if (pathname === '/technology') setActive('Technology');
	}, []);

	return (
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
					<NavItem
						active={active}
						setActive={setActive}
						name='Home'
						route='/'
						number='00'
					/>
					<NavItem
						active={active}
						setActive={setActive}
						name='Destination'
						route='/destination'
						number='01'
					/>
					<NavItem
						active={active}
						setActive={setActive}
						name='Crew'
						route='/crew'
						number='02'
					/>

					<NavItem
						active={active}
						setActive={setActive}
						name='Technology'
						route='/technology'
						number='03'
					/>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
