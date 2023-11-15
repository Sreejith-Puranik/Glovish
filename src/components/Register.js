// import logo from './logo.svg';
import "../ComponentCss/Userhome.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <>
      <Header role="User" />
      <div className="mainbody">
        <Sidebar role="User" />
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}

export default Register;
