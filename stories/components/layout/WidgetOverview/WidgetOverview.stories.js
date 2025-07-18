import React from 'react';
import WidgetOverview from './WidgetOverview';

export default {
  title: 'Components/WidgetOverview',
  component: WidgetOverview,
};

const Template = (args) => <WidgetOverview {...args} />;

export const Default = Template.bind({});
Default.args = {};
