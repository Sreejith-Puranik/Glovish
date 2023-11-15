import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import "../ComponentCss/RegisterForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    CollegeName: "",
    ProjectIntrested: "",
  });

  const isEmailValid = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // You can customize the validation logic based on your requirements
    const numericPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
    return numericPhoneNumber.length === 10; // Check if it has 10 digits
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform client-side processing.

    if (!isPhoneNumberValid(formData.PhoneNumber)) {
      toast.error("Invalid phone number");
      return; // Do not proceed with the submission
    } else if (!isEmailValid(formData.Email)) {
      toast.error("Invalid email format");
      return; // Do not proceed with the submission
    } else {
      try {
        // const hashedPassword = await bcrypt.hash(formData.Password, 10);
        // Define the data to be sent to the API
        const data = {
          name: formData.Name,
          email: formData.Email,
          password: formData.Password,
          phone: formData.PhoneNumber,
          college: formData.CollegeName,
          project: formData.ProjectIntrested,
        };

        // Send a POST request to the API
        const response = await axios.post(
          "http://glovishbackend-env.eba-s3yriemj.ap-south-1.elasticbeanstalk.com/login",
          data
        );

        if (response.status === 200) {
          toast.success("Registration success");
          // console.log("Registration successful:", response.data);
          // You can handle the response as needed (e.g., show a success message).
        } else {
          toast.error("Registration failed");
          // console.log("Registration failed:", response.data);
          // You can handle the response as needed (e.g., show an error message).
        }
      } catch (error) {
        toast.error(error);
        // console.error("Registration error:", error);
        // Handle errors, such as network issues or server errors.
      }
    }
  };

  return (
    <div className="container">
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
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          component="div"
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          Register Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="College Name"
            variant="outlined"
            fullWidth
            name="CollegeName"
            value={formData.CollegeName}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Project Intrested"
            variant="outlined"
            fullWidth
            name="ProjectIntrested"
            value={formData.ProjectIntrested}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />

          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default RegisterForm;
