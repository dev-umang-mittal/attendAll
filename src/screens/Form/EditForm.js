import React from "react";
import {
  Edit,
} from "react-admin";
import { Box, Card, Typography } from "@mui/material";
import EmployeeForm from "../Form/EmployeeForm";

const Aside = () => (
  <Box sx={{ width: '200px', margin: '1em' }}>
      <Typography variant="h6">Instructions</Typography>
      <Typography variant="body2">
          Posts will only be published once an editor approves them
      </Typography>
  </Box>
);

const HeaderTitle = ({ record }) => {
console.log("🚀 ~ file: EditForm.js ~ line 18 ~ HeaderTitle ~ record", record)
  return <span>{record}</span>;
};


export default function EditForm(props) {  
  return (
      <Edit resource="users"  aside={<Aside />} >
        <EmployeeForm />
      </Edit>
  );
}
