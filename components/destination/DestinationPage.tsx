import { FunctionComponent, ReactElement, useState } from 'react';
import { Tabs } from './Tabs';

type TabsProps = {
	children: ReactElement[];
};
const DestinationPage: FunctionComponent<TabsProps> = ({ children }) => {
	const [selectdTab, setSelectdTab] = useState(0);
	return (
		<>
			<div className='tab-list underline-indicators flex'>
				{children.map((item, index) => (
					<Tabs
						key={index}
						index={index}
						title={item.props.title}
						selectedTab={selectdTab}
						setSelectedTab={setSelectdTab}
					/>
				))}
			</div>
			{children[selectdTab]}
		</>
	);
};

export default DestinationPage;
