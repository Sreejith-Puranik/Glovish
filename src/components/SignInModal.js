import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthContext";

function SignInModal({ open, onClose }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedInUser } = useAuth();

  // Define a function to make the API request
  const handleSignIn = async () => {
    // console.log("Clicked signin");
    // console.log(`http://localhost:3000/login/${email}/${password}`);
    try {
      const response = await axios.get(
        `http://glovishbackend-env.eba-s3yriemj.ap-south-1.elasticbeanstalk.com/login/${email}/${password}`
      );
      // console.log(response);

      // Assuming your API returns a response with a status code to indicate success or failure

      if (response.status === 200) {
        if (
          email === "glovishtech777@gmail.com" &&
          password === "glovishtech777"
        ) {
          toast.success("Login success");
          setLoggedInUser(email);
          navigate("/admin");
        } else {
          toast.success("Login success");
          setLoggedInUser(email);
          navigate("/user");
        }
      } else {
        // Handle other non-200 status codes
        toast.error(response.data.message);
      }
    } catch (error) {
      // Check if it's an Axios error
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response && response.status === 401) {
          // Assuming response.data.message is the correct structure from the server
          toast.error(response.data.message || "Invalid credentials");
        } else {
          toast.error(`Request failed with status code: ${response.status}`);
        }
      } else {
        // Handle other types of errors
        toast.error(`An unexpected error occurred: ${error.message}`);
      }
    }
  };

  // const handleSignIn = () => {
  //   // Add your sign-in logic here
  //   console.log("Sign In:", email, password);
  //   if (email === "admin" && password === "admin") {
  //     toast.success("Login Success", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     navigate("/admin");
  //   } else {
  //     toast.error("Invalid email or password", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

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
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>

          <br></br>
          <p>
            Not Registered?{" "}
            <Link
              style={{ color: "darkcyan", cursor: "pointer" }}
              to={`/register`}
            >
              Click Here
            </Link>
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSignIn} color="primary" variant="contained">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SignInModal;
