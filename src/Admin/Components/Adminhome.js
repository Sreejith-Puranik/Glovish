// import logo from './logo.svg';
import "../ComponentCss/Adminhome.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

function Adminhome() {
  return (
    <>
      <Header role="Admin" />
      <div className="mainbody">
        <Sidebar role="Admin" />
        <Projects role="Admin" />
      </div>
      <Footer />
    </>
  );
}

export default Adminhome;
