import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dislikes" source="dislikes" />
        <TextField label="ID" source="id" />
        <TextField label="likes" source="likes" />
        <TextField label="topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userID" source="userId" />
      </Datagrid>
    </List>
  );
};
