import React from "react";
import "../ComponentCss/Adminhome.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ProjectForm from "./ProjectForm";

function AddProjects() {
  return (
    <>
      <Header role="Admin" />
      <div className="mainbody">
        <Sidebar />
        <ProjectForm />
      </div>
      <Footer />
    </>
  );
}

export default AddProjects;
