import React from "react";
import {
  Create,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import EmployeeForm from "../Form/EmployeeForm";

const Aside = () => (
  <Box sx={{ width: '200px', margin: '1em' }}>
      <Typography variant="h6">Instructions</Typography>
      <Typography variant="body2">
          Posts will only be published once an editor approves them
      </Typography>
  </Box>
);

export default function RegisterationForm(props) {
  console.log("🚀 ~ file: RegisterationForm.js ~ line 34 ~ RegisterationForm ~ props", props)
  
  return (
      <Create aside={<Aside />} title={"Employee Registeration"} >
        <EmployeeForm props={"g"} />
      </Create>
  );
}
