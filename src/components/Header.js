import { React, useState } from "react";
import "../ComponentCss/Header.css";
import pic from "../images/logo.jpg";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SignInModal from "./SignInModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header(props) {
  const [searchValue, setSearchValue] = useState("");
  const { email, setLoggedInUser } = useAuth();
  const navigate = useNavigate();
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleSearch = () => {
    if (searchValue === "") {
      toast.info("Please Add Search value");
    } else {
      // Navigate to the search results component with the search value as a query parameter
      navigate(`/searchdata/${searchValue}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // If the Enter key is pressed, trigger the search action
      handleSearch();
    }
  };

  const logout = () => {
    setLoggedInUser(null);
    navigate("/home");
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="header">
        <img src={pic} className="logo" alt="logo" />
        <div className="box">
          <input
            type="text"
            className="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={handleKeyPress}
            name="search"
            required
          ></input>
          <SearchIcon
            className="sbtn"
            color="primary"
            sx={{ fontSize: 47 }}
            onClick={handleSearch}
          />
        </div>

        <div className="logbtn">
          {props.role === "User" ? (
            <div>
              <Button
                className="signin"
                variant="contained"
                onClick={openSignInModal}
              >
                Sign In
              </Button>
              <SignInModal
                open={isSignInModalOpen}
                onClose={closeSignInModal}
              />
            </div>
          ) : (
            <>
              <span className="logname">{email}</span>
              <Button className="signin" variant="contained" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
