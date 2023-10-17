import { useState } from "react";
import { TabNav, TabNavItem } from "vcc-ui";

const CarsFilter = ({
  bodyTypes,
  selectedType,
}: {
  bodyTypes: string[];
  selectedType: (type: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={activeTab === 1}
        onClick={() => {
          setActiveTab(1);
          selectedType("");
        }}
      >
        ALL
      </TabNavItem>
      {bodyTypes.map((type, index) => (
        <TabNavItem
          key={index}
          isActive={activeTab === index + 2}
          onClick={() => {
            setActiveTab(index + 2);
            selectedType(type);
          }}
        >
          {type.toUpperCase()}
        </TabNavItem>
      ))}
    </TabNav>
  );
};

export default CarsFilter;
