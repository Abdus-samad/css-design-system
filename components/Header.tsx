import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { INav } from '../type';

const Header: FunctionComponent<{ link: INav }> = ({
	link: { number, route, title },
}) => {
	const router = useRouter();
	return (
		
		<Link href={route}>
			<a
				className={
					router.asPath == route
						? 'active uppercase letter-spacing-2'
						: 'uppercase text-white letter-spacing-2'
				}>
				<span aria-hidden='true'>{number}</span>
				{title}
			</a>
		</Link>
	);
};

export default Header;
