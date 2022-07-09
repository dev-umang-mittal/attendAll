import React from "react";
import { Admin, fetchUtils, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default function Dashboard() {
  return (
    <Admin title="My Custom Admin" dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
      <Resource name="comments" list={ListGuesser} />
    </Admin>
  );
}
