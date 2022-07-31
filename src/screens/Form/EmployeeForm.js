import { Card, Typography } from "@mui/material";
import React from "react";
import { NumberInput, SimpleForm, TextInput } from "react-admin";

export default function EmployeeForm(props) {
  return (
    <div>
      <Card>
        <SimpleForm>
          <Typography variant="h4" gutterBottom>
            Fill Employee Details
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <TextInput source="name" label="First Name" style={{ width: "49%" }} />
            {/* <TextInput source="Last Name" style={{ width: "49%" }} /> */}
          </div>
          <TextInput source="phone" label="Phone Number" />
          {/* <NumberInput source="Salary" /> */}
        </SimpleForm>
      </Card>
    </div>
  );
}
