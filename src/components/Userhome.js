// import logo from './logo.svg';
import "../ComponentCss/Userhome.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Userhome() {
  return (
    <>
      <Header role="User" />
      <div className="mainbody">
        <Sidebar role="User" />
        <Projects role="User" />
      </div>
      <Footer />
    </>
  );
}

export default Userhome;
