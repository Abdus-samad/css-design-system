import { on } from 'events';
import { FunctionComponent, useCallback } from 'react';

type TabsProps = {
	title: string;
	index: number;
	setSelectedTab: (index: any) => void;
	selectedTab: number;
};

export const Dots: FunctionComponent<TabsProps> = ({
	index,
	selectedTab,
	setSelectedTab,
	title,
}) => {
	const onClick = useCallback(() => {
		setSelectedTab(index);
	}, [setSelectedTab, index]);
	return (
		<button
			className={`li ${selectedTab === index ? 'active' : ''}`}
			onClick={onClick}>
			<span className='sr-only'>{title}</span>
		</button>
	);
};
