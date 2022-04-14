import React, { cloneElement, FunctionComponent } from 'react';
import { Category } from '../../type';

export const NavItem: FunctionComponent<{
	value: Category | 'all';
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className = 'uppercase bg-dark text-accent letter-spacing-2';
	if (active === value) className += ' active';

	return (
		<button
			className={className}
			onClick={() => handlerFilterCategory(value)}>
			{value}
		</button>
	);
};

const Tabs: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className='tab-list underline-indicators flex'>
				{/* <NavItem value='all' {...props} /> */}
			<NavItem value='Moon' {...props} />
			<NavItem value='Mars' {...props} />
			<NavItem value='Europa' {...props} />
			<NavItem value='Titan' {...props} />
		</div>
	);
};

export { Tabs };
