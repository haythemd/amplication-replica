import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { NotePaperList } from "./notePaper/NotePaperList";
import { NotePaperCreate } from "./notePaper/NotePaperCreate";
import { NotePaperEdit } from "./notePaper/NotePaperEdit";
import { NotePaperShow } from "./notePaper/NotePaperShow";
import { CertificationList } from "./certification/CertificationList";
import { CertificationCreate } from "./certification/CertificationCreate";
import { CertificationEdit } from "./certification/CertificationEdit";
import { CertificationShow } from "./certification/CertificationShow";
import { ClassRoomList } from "./classRoom/ClassRoomList";
import { ClassRoomCreate } from "./classRoom/ClassRoomCreate";
import { ClassRoomEdit } from "./classRoom/ClassRoomEdit";
import { ClassRoomShow } from "./classRoom/ClassRoomShow";
import { SyllabusList } from "./syllabus/SyllabusList";
import { SyllabusCreate } from "./syllabus/SyllabusCreate";
import { SyllabusEdit } from "./syllabus/SyllabusEdit";
import { SyllabusShow } from "./syllabus/SyllabusShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Tek-Up"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="NotePaper"
          list={NotePaperList}
          edit={NotePaperEdit}
          create={NotePaperCreate}
          show={NotePaperShow}
        />
        <Resource
          name="Certification"
          list={CertificationList}
          edit={CertificationEdit}
          create={CertificationCreate}
          show={CertificationShow}
        />
        <Resource
          name="ClassRoom"
          list={ClassRoomList}
          edit={ClassRoomEdit}
          create={ClassRoomCreate}
          show={ClassRoomShow}
        />
        <Resource
          name="Syllabus"
          list={SyllabusList}
          edit={SyllabusEdit}
          create={SyllabusCreate}
          show={SyllabusShow}
        />
      </Admin>
    </div>
  );
};

export default App;
