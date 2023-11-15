import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  TablePagination,
  Link,
} from "@mui/material";
import { useAuth } from "./AuthContext"; // Import the AuthContext
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ViewProjects(props) {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { email } = useAuth(); // Get the user's email from AuthContext

  // Function to fetch data from the API
  const fetchData = async () => {
    if (props.projectrole === "searchdata") {
      try {
        console.log("searching", props.projectname);
        const response = await axios.get(
          `http://glovishbackend-env.eba-s3yriemj.ap-south-1.elasticbeanstalk.com/searchproject/${props.projectname.toUpperCase()}`
        );
        console.log(response.data);
        setProjects(response.data); // Assuming the API response is an array of projects
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    } else {
      try {
        const response = await axios.get(
          `http://glovishbackend-env.eba-s3yriemj.ap-south-1.elasticbeanstalk.com/project/${props.projectname.toUpperCase()}`
        );
        setProjects(response.data); // Assuming the API response is an array of projects
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Function to handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSynopsisClick = (e) => {
    if (!email) {
      // User is not logged in
      toast.info("Please log in to view the synopsis.");
      e.preventDefault();
    }
    // You can add more logic here if needed
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Id</b>
              </TableCell>
              <TableCell>
                <b>Project Name</b>
              </TableCell>
              <TableCell>
                <b>Domain</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Price</b>
              </TableCell>
              <TableCell>
                <b>Synopsis</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.id}</TableCell>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.domain}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>{project.price}</TableCell>
                  <TableCell>
                    <Link
                      href={project.synopsis}
                      onClick={handleSynopsisClick}
                      target="_blank"
                    >
                      View Synopsis
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={projects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default ViewProjects;
