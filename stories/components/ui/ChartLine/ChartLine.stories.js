// ChartLine.stories.js
import React from 'react';
import ChartLine from './ChartLine';

export default {
  title: 'UI/ChartLine',
  component: ChartLine,
  argTypes: {
    showPotentialProspects: {
      control: 'boolean',
      description: 'Toggle display of Potential Prospects line',
    },
  },
};

const Template = (args) => <ChartLine {...args} />;

export const Default = Template.bind({});
Default.args = {
  showPotentialProspects: false,
};

export const WithPotentialProspects = Template.bind({});
WithPotentialProspects.args = {
  showPotentialProspects: true,
};
