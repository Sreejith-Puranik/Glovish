// import logo from './logo.svg';
import "../../ComponentCss/ProjectDesc.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import ViewProjects from "../../components/ViewProjects";

function UserProjectView() {
  const { projectname } = useParams();

  return (
    <>
      <Header role="Usermain" />
      <div className="mainbody">
        <Sidebar role="Usermain" />
        <div className="container">
          <h2>{projectname} Projects</h2>
          <ViewProjects projectname={projectname} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProjectView;
