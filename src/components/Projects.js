import React from "react";
import "../ComponentCss/Projects.css";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrows from "./PrevArrows";
import NextArrow from "./NextArrow";
import AdminProjectCard from "../Admin/Components/AdminProjectCard";
import UserProjectCard from "../User/Components/UserProjectCard";

const projectData = [
  {
    imgname:
      "https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg?auto=webp&quality=85,70",
    projectname: "Java Management",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },
  {
    imgname: "https://www.artifakt.com/content/uploads/2021/09/Java.jpg",
    projectname: "Java Cloud",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },
  {
    imgname:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png",
    projectname: "Python",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },

  {
    imgname:
      "https://deepinthecode.com/wp-content/uploads/2012/08/visual-basic-net.jpg",
    projectname: "Vb .net",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },
  {
    imgname:
      "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    projectname: "React",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },
  {
    imgname:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png",
    projectname: "PHP",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },
  {
    imgname: "https://stl.tech/wp-content/uploads/2022/10/IOT-1.jpg",
    projectname: "IOT Projects",
    projectdesc:
      "Enhance your Java skills with our top 50 project ideas! From beginner-friendly exercises to advanced applications, fuel your learning.",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <PrevArrows />,
  nextArrow: <NextArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function Projects(props) {
  return (
    <div className="container">
      <h2>GLOVISH PROJECTS</h2>
      <div className="projects">
        {props.role === "Admin" ? (
          <Slider {...settings}>
            {projectData.map((project, index) => (
              <AdminProjectCard
                key={index}
                imgname={project.imgname}
                projectname={project.projectname}
                projectdesc={project.projectdesc}
              />
            ))}
          </Slider>
        ) : (
          <>
            {props.role === "Usermain" ? (
              <Slider {...settings}>
                {projectData.map((project, index) => (
                  <UserProjectCard
                    key={index}
                    imgname={project.imgname}
                    projectname={project.projectname}
                    projectdesc={project.projectdesc}
                  />
                ))}
              </Slider>
            ) : (
              <Slider {...settings}>
                {projectData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    imgname={project.imgname}
                    projectname={project.projectname}
                    projectdesc={project.projectdesc}
                  />
                ))}
              </Slider>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
