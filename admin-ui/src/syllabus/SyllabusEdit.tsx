import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SyllabusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="desc" source="desc" />
        <TextInput label="teacher" source="teacher" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
