import { FunctionComponent, useCallback } from 'react';

type TabsProps = {
	title: string;
	index: number;
	setSelectedTab: (index: any) => void;
	selectedTab: number;
};

export const Tabs: FunctionComponent<TabsProps> = ({
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
			className={`uppercase text-accent letter-spacing-2 ${
				selectedTab === index ? 'active' : ''
			}`}
			onClick={onClick}>
			{title}
		</button>
	);
};
// let className = '';
// if (active === value) className += ' active';
