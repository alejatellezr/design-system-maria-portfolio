// TabsGroup.stories.js
import React, { useState } from 'react';
import TabsGroup from './TabsGroup';

export default {
  title: 'UI/TabsGroup',
  component: TabsGroup,
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['row', 'column'],
      defaultValue: 'row',
    },
    disabled: { control: 'boolean' },
  },
};

const tabOptions = [
  { label: 'Overview', value: 'overview' },
  { label: 'Details', value: 'details' },
  { label: 'Settings', value: 'settings' },
];

const Template = (args) => {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);

  return (
    <>
      <TabsGroup
        {...args}
        tabs={tabOptions}
        onChange={(tab) => setActiveTab(tab)}
      />
      <p>Selected tab: {activeTab.label}</p>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  orientation: 'row',
  disabled: false,
};