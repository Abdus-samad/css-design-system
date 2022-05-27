import { FunctionComponent, useCallback } from "react";
type TabsProps = {
  number: string;
  index: number;
  setSelectedTab: (index: any) => void;
  selectedTab: number;
};

export const NumberIndicator: FunctionComponent<TabsProps> = ({
  index,
  selectedTab,
  setSelectedTab,
  number,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return (
    <button
      className={`${selectedTab === index ? "active" : ""}`}
      onClick={onClick}>
      <span>{number}</span>
    </button>
  );
};
