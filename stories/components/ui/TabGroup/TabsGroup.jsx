// TabsGroup.jsx
import React, { useState } from 'react';
import Tab from './../Tab/Tab';
import './_tabsgroup.scss';

const TabsGroup = ({
  tabs = [],
  defaultIndex = 0,
  onChange,
  orientation = 'row',
  disabled = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index) => {
    if (disabled) return;
    setActiveIndex(index);
    onChange?.(tabs[index], index);
  };

  return (
    <div className={`x-tabs-group x-tabs-group--${orientation}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.value || index}
          label={tab.label}
          direction={orientation}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
          disabled={tab.disabled || disabled}
        />
      ))}
    </div>
  );
};

export default TabsGroup;