// import logo from './logo.svg';
import "../../ComponentCss/Userhome.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

function Usermain() {
  return (
    <>
      <Header role="Usermain" />
      <div className="mainbody">
        <Sidebar role="Usermain" />
        <Projects role="Usermain" />
      </div>
      <Footer />
    </>
  );
}

export default Usermain;
