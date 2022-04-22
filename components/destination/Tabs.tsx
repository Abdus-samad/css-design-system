import { FunctionComponent, useCallback } from 'react';

type TabProps = {
	title: string;
	index: number;
	setSelectedTab: (index: any) => void;
	selectedTab: number;
};

export const Tabs: FunctionComponent<TabProps> = ({
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
			className={` uppercase text-accent letter-spacing-2 ${
				selectedTab === index ? 'active' : ''
			}`}
			onClick={onClick}>
			{title}
		</button>
	);
};
