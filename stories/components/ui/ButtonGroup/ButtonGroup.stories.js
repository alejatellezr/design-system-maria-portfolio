// buttonGroup.stories.js
import React from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const row = Template.bind({});
row.args = {
  orientation: 'row',
  buttons: [
    { label: 'Home', iconName: 'IconHome', style: 'flat', active: true },
    { label: 'Settings', iconName: 'IconSettings', style: 'flat', active: false },
    { label: 'Profile', iconName: 'IconUser', style: 'flat', active: false },
  ],
};

export const column = Template.bind({});
column.args = {
  orientation: 'column',
  buttons: [
    { label: 'Dashboard', iconName: 'IconLayoutDashboard', style: 'solid', active: true },
    { label: 'Reports', iconName: 'IconFileAnalytics', style: 'outline', active: false },
    { label: 'Logout', iconName: 'IconLogout', style: 'flat', active: false },
  ],
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  orientation: 'row',
  buttons: [
    { iconName: 'IconHome', iconOnly: true, label: 'Home', style: 'solid', active: false },
    { iconName: 'IconSettings', iconOnly: true, label: 'Settings', style: 'outline', active: false },
    { iconName: 'IconUser', iconOnly: true, label: 'Profile', style: 'flat', active: true },
  ],
};
