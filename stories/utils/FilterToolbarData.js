import ChipStatus from "../../stories/components/ui/ChipStatus/ChipStatus";
export const leftTabs = {
  orientation: "row",
  buttons: [
    {
      iconName: "null",
      iconOnly: false,
      label: "Overview",
      style: "outline",
      active: false,
    },
    {
      iconName: "null",
      iconOnly: false,
      label: "Overview & Prospective",
      style: "solid",
      active: true,
    },
  ],
};

export const MeasureDropdown = {
  label: "Measure",
  selected: "dollars",
  options: [
    { value: "dollars", label: "Dollars" },
    { value: "units", label: "Units" },
    { value: "impressions", label: "Impressions" },
  ],
  status: "default",
  direction: "row",
};

export const TimePeriodDropdown = {
  label: "Time Period",
  selected: "01",
  options: [
    { value: "01", label: "Rolling 12 Months" },
    { value: "02", label: "Rolling 6 Months" },
    { value: "03", label: "Current Month" },
    { value: "04", label: "Previous Month" },
    { value: "05", label: "Current Year" },
    { value: "06", label: "Previous Year" },
  ],
  status: "default",
  direction: "row",
};

export const tabOptions = [
  { label: "Media", value: "media" },
  { label: "Accounts", value: "accounts" },
  { label: "Property", value: "property" },
  { label: "Markets", value: "markets" },
  { label: "Additional Settings", value: "additional" },
];

export const allMediaOptions = [
  "Internet - Display",
  "National TV",
  "Internet - Search",
  "Social Media",
  "Magazines",
  "Radio",
];

export const allMarketsOptions = [
  "ALL MARKETS",
  "SAO PAULO",
  "RIO DE JANEIRO",
  "BRASILIA",
  "BELO HORIZONTE",
  "BELEM",
  "FORTALEZA",
  "RECIFE",
  "CURITIBA",
  "PORTO ALEGRE",
  "GOIANIA",
  "MANAUS",
  "VITORIA",
  "CAMPINAS",
  "NATAL",
  "FLORIANOPOLIS",
  "JOAO PESSOA",
  "MACEIO",
  "TERESINA",
  "ARACAJU",
  "CUIABA",
  "MACAPA",
  "RIO BRANCO",
  "PALMAS",
  "PORTO VELHO",
  "BOA VISTA",
];

export const GridAccountsColumns = [
  { key: "name", label: "Name", filter: "text" },
  { key: "level", label: "Level", filter: "text" },
  {
    key: "status",
    label: "Status",
    filter: "select",
    options: ["Owned", "Competitor", "Prospect"],
    render: (value) => <ChipStatus label={value} type={value} />,
  },
];

export const GridAccountsData = [
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

export const GridPropertyData = [
  {
    id: "row-1",
    name: "RECORD MINAS-GRANDE-BELO HORIZONTE (REC)",
    level: "Property",
    status: "Owned",
  },
  {
    id: "row-2",
    name: "ALTEROSA-GRANDE BELO HORIZONTE (Sbt)",
    level: "Property",
    status: "Prospect",
  },
  {
    id: "row-3",
    name: "TV BAND-GRANDE BELO HORIZONTE (BAN)",
    level: "Property",
    status: "Prospect",
  },
  {
    id: "row-4",
    name: "TV!-GRANDE BELO HORIZONTE (RTV)",
    level: "Property",
    status: "Prospect",
  },
  {
    id: "row-5",
    name: "GLOBO-GRANDE BELO HORIZONTE (GLO)",
    level: "Property",
    status: "Competitor",
  },
];

export const AdditionalSettingsRollup = [
  { label: "Parent", value: "parent" },
  { label: "Advertiser", value: "advertiser" },
  { label: "Brand", value: "brand" },
  { label: "Product", value: "product" },
];
