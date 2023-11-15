// import logo from './logo.svg';
import "../../ComponentCss/ProjectDesc.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ViewProjects from "../../components/ViewProjects";
import { useParams } from "react-router-dom";

function Adminhome() {
  const { projectname } = useParams();
  return (
    <>
      <Header role="Admin" />
      <div className="mainbody">
        <Sidebar role="Admin" />
        <div className="container">
          <h2>{projectname} Projects</h2>
          <ViewProjects projectname={projectname} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Adminhome;
