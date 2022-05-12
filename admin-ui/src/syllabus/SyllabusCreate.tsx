import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SyllabusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="desc" source="desc" />
        <TextInput label="teacher" source="teacher" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
