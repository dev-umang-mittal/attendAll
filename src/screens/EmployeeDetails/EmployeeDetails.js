import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  FilterList,
  FilterListItem,
  List,
  TopToolbar,
  FilterButton,
  CreateButton,
  ExportButton,
  Button,
  EditButton,
  TextField,
  FilterLiveSearch,
} from "react-admin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOnOutlined";
import MailIcon from "@mui/icons-material/MailOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOfferOutlined";
import IconEvent from "@mui/icons-material/Event";
import {
  endOfYesterday,
  startOfWeek,
  subWeeks,
  startOfMonth,
  subMonths,
} from "date-fns";
// import segments from "../segments/data";
import { Box, Card, CardContent, styled } from "@mui/material";

const LastVisitedFilter = () => (
  <FilterList label="Last visited" icon={<AccessTimeIcon />}>
    <FilterListItem
      label="Today"
      value={{
        last_seen_gte: endOfYesterday().toISOString(),
        last_seen_lte: undefined,
      }}
    />
    <FilterListItem
      label="This week"
      value={{
        last_seen_gte: startOfWeek(new Date()).toISOString(),
        last_seen_lte: undefined,
      }}
    />
    <FilterListItem
      label="Last week"
      value={{
        last_seen_gte: subWeeks(startOfWeek(new Date()), 1).toISOString(),
        last_seen_lte: startOfWeek(new Date()).toISOString(),
      }}
    />
    <FilterListItem
      label="This month"
      value={{
        last_seen_gte: startOfMonth(new Date()).toISOString(),
        last_seen_lte: undefined,
      }}
    />
    <FilterListItem
      label="Last month"
      value={{
        last_seen_gte: subMonths(startOfMonth(new Date()), 1).toISOString(),
        last_seen_lte: startOfMonth(new Date()).toISOString(),
      }}
    />
    <FilterListItem
      label="Earlier"
      value={{
        last_seen_gte: undefined,
        last_seen_lte: subMonths(startOfMonth(new Date()), 1).toISOString(),
      }}
    />
  </FilterList>
);
const HasOrderedFilter = () => (
  <FilterList label="Has ordered" icon={<MonetizationOnIcon />}>
    <FilterListItem
      label="True"
      value={{
        nb_commands_gte: 1,
        nb_commands_lte: undefined,
      }}
    />
    <FilterListItem
      label="False"
      value={{
        nb_commands_gte: undefined,
        nb_commands_lte: 0,
      }}
    />
  </FilterList>
);
const HasNewsletterFilter = () => (
  <FilterList label="Has newsletter" icon={<MailIcon />}>
    <FilterListItem label="True" value={{ has_newsletter: true }} />
    <FilterListItem label="False" value={{ has_newsletter: false }} />
  </FilterList>
);
// const SegmentFilter = () => (
//   <FilterList label="Segment" icon={<LocalOfferIcon />}>
//     {segments.map((segment) => (
//       <FilterListItem
//         label={segment.name}
//         key={segment.id}
//         value={{ groups: segment.id }}
//       />
//     ))}
//   </FilterList>
// );

const FilterSidebar = () => (
  <Box
    sx={{
      display: {
        xs: "none",
        sm: "block",
      },
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em",
    }}
  >
    <Card>
      <CardContent>
        <FilterLiveSearch source="name" />
        <LastVisitedFilter />
        <HasOrderedFilter />
        <HasNewsletterFilter />
        {/* <SegmentFilter /> */}
      </CardContent>
    </Card>
  </Box>
);

const ListActions = () => (
  <TopToolbar>
    <CreateButton resource="users" />
    <ExportButton />
    {/* Add your custom actions */}
    <Button
      onClick={() => {
        alert("Your custom action");
      }}
      label="Show calendar"
    >
      <IconEvent />
    </Button>
  </TopToolbar>
);

export default function EmployeeDetails() {
  return (
    <>
      {/* <List aside={<FilterSidebar />}> */}
      <List aside={<FilterSidebar />} actions={<ListActions />} >
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <EditButton />
        </Datagrid>
      </List>
    </>
  );
}
