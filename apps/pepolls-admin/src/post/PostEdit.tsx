import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" source="content" />
        <NumberInput step={1} label="dislikes" source="dislikes" />
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="topic" source="topic" />
        <TextInput label="userID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
