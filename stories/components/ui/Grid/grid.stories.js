import React from "react";
import Grid from "./Grid";
import ChipStatus from "../ChipStatus/ChipStatus";

export default {
  title: "UI/Grid",
  component: Grid,
};

const columns = [
  { key: "name", label: "Name", filter: "text" },
  { key: "level", label: "Level", filter: "text" },
  {
    key: "status",
    label: "Status",
    filter: "select",
    options: ["Owned", "Competitor","Prospect"],
    render: (value) => (
      <ChipStatus
        label={value}
        type={value}
      />
    ),
  },
];

const data = [
  {
    id: "row-1",
    name: "MART MINAS",
    level: "Advertiser",
    status: "Owned",
  },
  {
    id: "row-2",
    name: "SUPERMERCADOS BH",
    level: "Advertiser",
    status: "Owned",
  },
  {
    id: "row-3",
    name: "SUPERMERCADOS EPA",
    level: "Advertiser",
    status: "Owned",
  },
  {
    id: "row-4",
    name: "RADIO VERDES MARES",
    level: "Advertiser",
    status: "Prospect",
  },
  {
    id: "row-5",
    name: "SUPERMERCADO VERDEMAR",
    level: "Advertiser",
    status: "Prospect",
  },
  {
    id: "row-6",
    name: "SUPERMERCADO EXITO",
    level: "Advertiser",
    status: "Competitor",
  },
];

const Template = (args) => <Grid {...args} />;

export const WithChips = Template.bind({});
WithChips.args = {
  columns,
  data,
  showFilters: true,
};
