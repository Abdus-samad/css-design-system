import React, { FunctionComponent, ReactElement, useState } from "react";
import { NumberIndicator } from "./NumberIndicator";

type TabsProps = {
  children: ReactElement[];
};

const TechPage: FunctionComponent<TabsProps> = ({ children }) => {
  const [selectdTab, setSelectdTab] = useState(0);
  return (
    <>
      <div className='number-indicators flex'>
        {children.map((item, index) => (
          <NumberIndicator
            key={index}
            number={item.props.number}
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

export default TechPage;
