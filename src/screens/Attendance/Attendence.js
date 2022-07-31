import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BooleanField,
  Button,
  ChipField,
  CustomRoutes,
  Datagrid,
  DateField,
  FilterLiveSearch,
  List,
  ListBase,
  NumberField,
  RecordContextProvider,
  ReferenceField,
  ResourceContextProvider,
  Show,
  ShowBase,
  SimpleList,
  SimpleShowLayout,
  SingleFieldList,
  Tab,
  TabbedShowLayout,
  TextField,
  useGetOne,
  useListContext,
  useNotify,
  useRedirect,
  useRefresh,
  useShowContext,
  useShowController,
  WithRecord,
} from "react-admin";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Route } from "react-router-dom";

// const Sidebar = () => (
//   <Box
//     sx={{
//       display: {
//         xs: "none",
//         sm: "block",
//       },
//       order: -1, // display on the left rather than on the right of the list
//       width: "20em",
//       marginRight: "1em",
//     }}
//   >
//     <Card>
//       <CardContent>
//         <List title=" ">
//           <Datagrid>
//             <TextField source="name" />
//           </Datagrid>
//         </List>
//       </CardContent>
//     </Card>
//   </Box>
// );

const ShowAttendance = ({userId}) => {
console.log("🚀 ~ file: Attendence.js ~ line 60 ~ ShowAttendance ~ userId", userId)
    const redirect = useRedirect();
    const { data, isLoading } = useGetOne(
        'posts',
        {id:userId}
    );
    if (isLoading) { return <Typography variant="caption" display="block">Loading</Typography>; }
    return (
        <div>
            <Card style={{flex:1}} >
                <Stack spacing={1} padding={4}>
                    <div>
                        <Typography variant="caption" display="block">Title</Typography>
                        <Typography variant="body2">{data.title}</Typography>
                    </div>
                    <div>
                        <Typography variant="caption" display="block">Body</Typography>
                        <Typography variant="body2">{data.body}</Typography>
                    </div>
                </Stack>
            </Card>
        </div>
    );
};

// const ShowAttendance = ({userId}) => {
//   const notify = useNotify();
//   const refresh = useRefresh();
//   const redirect = useRedirect();

//   const getOne = () => {
//       console.log("logged");
//   };

//   const {
//     defaultTitle,
//     error,
//     isLoading,
//     record,
// } = useShowController({ queryOptions: { getOne } });

//       return (
//         <RecordContextProvider value={record}>
//         <h1>{defaultTitle}</h1>
//         <SimpleShowLayout>
//             <TextField source="title" />
//         </SimpleShowLayout>
//     </RecordContextProvider>
//       );
//   };

const ListAttendees = ({ setUserId }) => {
  const { data } = useListContext();
  console.log(
    "🚀 ~ file: Attendence.js ~ line 63 ~ ListAttendees ~ data",
    data
  );

  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      {data &&
        data.map((record) => (
          <Button key={record.id} onClick={() => setUserId(record.id)}>
            {record.name}
          </Button>
        ))}
    </Stack>
  );
};

export default function Attendence() {
  const [userId, setUserId] = useState(1);
  useEffect(() => {
    console.log(userId);
  }, [userId]);
  return (
    <Card>
      <Grid container spacing={2}>
        <ResourceContextProvider value="users">
          <Grid item xs={2}>
            <ListBase
              disableSyncWithLocation
              emptyWhileLoading
              style={{ width: "20%" }}
            >
              <FilterLiveSearch source="name" />
              {/* <SimpleList
              primaryText={(record) => record.name}
              secondaryText={(record) => `${0} views`}
              rowStyle={(record) => ({
                backgroundColor: record.id === userId ? "lightGrey" : "white",
              })}
              linkType="show"
            /> */}
              <ListAttendees setUserId={setUserId} />
            </ListBase>
          </Grid>
        </ResourceContextProvider>
        <Grid item xs={6}>
            <ShowAttendance userId={userId} />
        </Grid>
      </Grid>
    </Card>
  );
}
