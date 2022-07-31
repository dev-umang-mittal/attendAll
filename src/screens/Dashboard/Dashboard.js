import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  ReferenceManyField,
  RichTextField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
  Title,
  useGetOne,
} from "react-admin";
import { Grid } from "@mui/material";

export default function Dashboard() {
  const { data: user, isLoading, error } = useGetOne("todos", { id: 1 });
  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={9}>
            <DealsChart />
        </Grid>
        <Grid item xs={12} md={3}>
            <Welcome />
        </Grid>
        <Grid item xs={12} md={6}>
            <LatestNotes />
        </Grid>
        <Grid item xs={12} md={3}>
            <HotContacts />
        </Grid>
        <Grid item xs={12} md={3}>
            <DealsPipeline />
        </Grid>
    </Grid>
  );
}
