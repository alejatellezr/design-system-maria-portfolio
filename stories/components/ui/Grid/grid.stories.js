import React from 'react';
import Grid from './Grid';

export default {
  title: 'UI/Grid',
  component: Grid,
};

const columns = [
  { key: 'name', label: 'Name', filter: 'text' },
  { key: 'age', label: 'Age', filter: 'text' },
  { key: 'email', label: 'Email', filter: 'text' },
  {
    key: 'status',
    label: 'Status',
    filter: 'select',
    options: ['Active', 'Inactive'],
  },
];

const data = [
  { name: 'Alice', age: 30, email: 'alice@example.com', status: 'Active' },
  { name: 'Bob', age: 40, email: 'bob@example.com', status: 'Inactive' },
  { name: 'Carol', age: 22, email: 'carol@example.com', status: 'Active' },
  { name: 'Dave', age: 28, email: 'dave@example.com', status: 'Inactive' },
];

const Template = (args) => <Grid {...args} />;

export const WithFilters = Template.bind({});
WithFilters.args = {
  columns,
  data,
  showFilters: true,
};

export const WithoutFilters = Template.bind({});
WithoutFilters.args = {
  columns,
  data,
  showFilters: false,
};
