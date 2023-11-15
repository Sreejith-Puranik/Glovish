// import logo from './logo.svg';
import "../ComponentCss/ProjectDesc.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ViewProjects from "./ViewProjects";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";

function SearchData() {
  const { data } = useParams();
  const { email } = useAuth();
  return (
    <>
      {email === null ? (
        <>
          <Header role="User" />
          <div className="mainbody">
            <Sidebar role="User" />
            <div className="container">
              <h2>{data}</h2>
              <ViewProjects
                key={data}
                projectname={data}
                projectrole="searchdata"
              />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          {email === "glovishtech777@gmail.com" ? (
            <>
              <Header role="Admin" />
              <div className="mainbody">
                <Sidebar role="Admin" />
                <div className="container">
                  <h2>{data}</h2>
                  <ViewProjects
                    key={data}
                    projectname={data}
                    projectrole="searchdata"
                  />
                </div>
              </div>
              <Footer />
            </>
          ) : (
            <>
              <Header role="Usermain" />
              <div className="mainbody">
                <Sidebar role="Usermain" />
                <div className="container">
                  <h2>{data}</h2>
                  <ViewProjects
                    key={data}
                    projectname={data}
                    projectrole="searchdata"
                  />
                </div>
              </div>
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
}

export default SearchData;
