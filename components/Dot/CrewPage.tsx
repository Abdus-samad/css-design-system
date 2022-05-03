import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Dots } from './Dots';

type TabsProps = {
	children: ReactElement[];
};

 const CrewPage: FunctionComponent<TabsProps> = ({ children }) => {
	const [selectdTab, setSelectdTab] = useState(0);
	return (
		<>
			<div className='dot-indicators flex'>
				{children.map((item, index) => (
					<Dots
						key={index}
						title={item.props.title}
						index={index}
						selectedTab={selectdTab}
						setSelectedTab={setSelectdTab}
					/>
				))}
			</div>
			{children[selectdTab]}
		</>
	);
};

export default CrewPage;
