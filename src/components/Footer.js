import { Container, Typography, Link } from "@mui/material";
import "../ComponentCss/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Glovish Technologies
        </Typography>

        <Typography variant="body2" align="center">
          <Link color="inherit" href="#">
            Privacy Policy
          </Link>
          {" | "}
          <Link color="inherit" href="#">
            Terms of Use
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
