// import logo from './logo.svg';
import "../ComponentCss/ProjectDesc.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ViewProjects from "./ViewProjects";

function ProjectDesc() {
  const { projectname } = useParams();

  return (
    <>
      <Header role="User" />
      <div className="mainbody">
        <Sidebar role="User" />
        <div className="container">
          <h2>{projectname} Projects</h2>
          <ViewProjects projectname={projectname} projectrole="domain" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDesc;
