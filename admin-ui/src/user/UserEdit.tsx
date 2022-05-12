import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { ClassRoomTitle } from "../classRoom/ClassRoomTitle";
import { NotePaperTitle } from "../notePaper/NotePaperTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="certifications"
          reference="Certification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CertificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="classroom.id"
          reference="ClassRoom"
          label="ClassRoom"
        >
          <SelectInput optionText={ClassRoomTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="notePapers"
          reference="NotePaper"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotePaperTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
