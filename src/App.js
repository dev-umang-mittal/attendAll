import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import Dashboard from './screens/Dashboard/Dashboard';
import RegisterationForm from './screens/Form/RegisterationForm';
import EditForm from './screens/Form/EditForm';
// import jsonServerProvider from 'ra-data-json-server';
// import { dataProvider } from "./components/DataProvider";
// import simpleRestProvider from 'ra-data-simple-rest';
import EmployeeDetails from "./screens/EmployeeDetails/EmployeeDetails";
import jsonServerRestClient from 'ra-data-json-server';
import Attendence from "./screens/Attendance/Attendence";

// const dataProvider = simpleRestProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerRestClient('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin title={"React Admin"} dataProvider={dataProvider} dashboard={Dashboard}>
        {/* <Resource name="Dashboard" list={Dashboard} /> */}
        <Resource name="attendance" list={Attendence}  />
        <Resource name="users" list={EmployeeDetails} create={RegisterationForm} edit={EditForm} />
    </Admin>
);

export default App;