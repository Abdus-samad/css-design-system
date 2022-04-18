import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Tabs } from '../Tabs/Tabs';

type TabsProps = {
	children: ReactElement[];
};
const Destination: FunctionComponent<TabsProps> = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState(0);
	return (
		<>
			<div className='tab-list underline-indicators flex'>
				{children.map((item, index) => (
					<Tabs
						key={index}
						title={item.props.title}
						index={index}
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
					/>
				))}
			</div>
			{children[selectedTab]}
		</>
	);
};

export default Destination;
