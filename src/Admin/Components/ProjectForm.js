import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import "../ComponentCss/ProjectForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ProjectForm() {
  const [formData, setFormData] = useState({
    projectId: "",
    projectName: "",
    domain: "",
    price: "",
    description: "",
    synopsis: "",
  });

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

    try {
      // Define the data to be sent to the API
      const data = {
        id: formData.projectId,
        name: formData.projectName,
        domain: formData.domain,
        price: formData.price,
        description: formData.description,
        synopsis: formData.synopsis,
      };

      // Send a POST request to the API
      const response = await axios.post(
        "http://glovishbackend-env.eba-s3yriemj.ap-south-1.elasticbeanstalk.com/project",
        data
      );

      if (response.status === 200) {
        toast.success("Project Added Successfully");
        // console.log("Registration successful:", response.data);
        // You can handle the response as needed (e.g., show a success message).
      } else {
        toast.error("Project Adding Failed");
        // console.log("Registration failed:", response.data);
        // You can handle the response as needed (e.g., show an error message).
      }
    } catch (error) {
      toast.error(error);
      // console.error("Registration error:", error);
      // Handle errors, such as network issues or server errors.
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
          Project Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Project ID"
            variant="outlined"
            fullWidth
            name="projectId"
            value={formData.projectId}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Project Name"
            variant="outlined"
            fullWidth
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <FormControl
            variant="outlined"
            fullWidth
            style={{ marginBottom: "10px" }}
          >
            <InputLabel htmlFor="domain" required>
              Domain
            </InputLabel>
            <Select
              label="Domain"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
            >
              <MenuItem value="JAVA MANAGEMENT">Java Management</MenuItem>
              <MenuItem value="JAVA CLOUD">Java Cloud</MenuItem>
              <MenuItem value="PYTHON">Python</MenuItem>
              <MenuItem value="VB.NET">VB.NET</MenuItem>
              <MenuItem value="IOT">IOT</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
            required
          />
          <TextField
            label="Synopsis"
            variant="outlined"
            fullWidth
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ProjectForm;
