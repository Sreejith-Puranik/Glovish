import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projectdesc/${props.projectname}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={props.imgname} title="logo" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.projectdesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          View Projects
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
