import React, { Suspense, useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Card = React.lazy(() => import("./Card"));
import "react-tabs/style/react-tabs.css";

const Home = () => {
  const [joke, setjoke] = useState("");
  const [heading] = useState(["Full Stack", "Front-End Development", "Backend Develpment"]);
  const [body] = useState([
    {
      fullStack: [
        {
          title: "CSV-Import-Manager",
          image: "",
          desc: "CSV Import Manager is a tool that helps you upload, manage and view your .csv files in a tabular format. This project was built using EJS, CSS, Bootstrap 5, Font Awesome and Node.js with Express.",
          link: "csv-import-manager.onrender.com",
        },
        {
          title: "HabitSensei",
          image: "",
          desc: "HabitSensei is a habit tracking web application that helps you achieve your goals and become the hero of your own Ninja journey.",
          link: "https://habitsensei.onrender.com",
        },
        {
          title: "Todo List",
          image: "",
          desc: "Create and delete tasks by category, which can be accompanied by a date.",
          link: "https://github.com/am-vishal/todo-list",
        },
      ],
    },
    {
      frontEnd: [
        {
          title: "React Album",
          image: "",
          desc: "React-album is a simple React application that allows you to view, add, update, and delete albums from a list. The list of albums is fetched from an external API (https://jsonplaceholder.typicode.com/albums) and displayed on the page as cards.",
          link: "https://am-vishal.github.io/react-album/",
        },
        {
          title: "iPod-Mini-Project",
          image: "",
          desc: "ReatJs & react-audio-player is used. Songs are streamed from bensound.",
          link: "https://am-vishal.github.io/iPod-Mini-Project/",
        },
        {
          title: "Alarm Clock",
          image: "",
          desc: "This is a simple web-based alarm clock application that allows you to set an alarm and displays the current time on the page.",
          link: "https://am-vishal.github.io/alarm-clock/",
        },
        {
          title: "Ninja Player",
          image: "",
          desc: "This is a simple web-based music player application.",
          link: "https://github.com/am-vishal/ninja-player",
        },
      ],
    },
    {
      backEnd: [
        {
          title: "Hospital-API",
          image: "",
          desc: "The Hospital API is a RESTful API that provides CRUD (Create, Read, Update, and Delete) operations for managing doctors, patients, and reports. It is built using Node.js and Express.js, and uses MongoDB Atlas as the database.",
          link: "https://csv-import-manager.onrender.com/",
        },
        {
          title: "jwtToken",
          image: "",
          desc: "Generate json web token",
          link: "https://github.com/am-vishal/jwtToken",
        },
      ],
    },
  ]);

  useEffect(() => {
    acquireJoke();
    return () => setjoke("");
  }, []);

  const acquireJoke = async () => {
    let API = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    let response = await fetch(API);
    let data = await response.json();
    setjoke(data.joke);
  };

  return (
    <>
      <section id="portfolio" className="box-shadow" style={{ background: "#23324673" }}>
        <div className="container hero-container">
          <video src="/BackgroundVideo.mp4" autoPlay loop muted />
          <div className="title my-4 py-2">
            <h2 className="tm-portfolio-title text-white">My Work</h2>
          </div>
          <div className="container bg-transparent mx-3 row d-flex justify-content-center w-100">
            <Suspense fallback={<div>Loading...</div>}>
              <Tabs>
                <TabList>
                  {heading.map((header, index) => (
                    <Tab key={index}>{header}</Tab>
                  ))}
                </TabList>
                {body.map((items, index) => (
                  <TabPanel key={index}>
                    <div className="row overflow-scroll-cls bg-transparent d-flex justify-content-center mb-4">
                      {items[Object.keys(items)].map((ele, i) => (
                        <div key={i} className="col bg-transparent d-flex justify-content-center my-4">
                          <Card key={i} ele={ele} />
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </Suspense>
          </div>
        </div>
      </section>
      <section id="about" className="tm-about">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className="title">
                <h2>
                  <p className="about-me" style={{ fontFamily: "Bradley Hand, cursive", display: "inline-block" }}>
                    <strong>About Me</strong>
                  </p>
                </h2>
              </div>
              <div className="container">
                <p className="about-me-para mx-4">
                  Meet <u className="d-inline tm-red-text popup-image">Vishal</u>, the MERN-stack magician! He's like a real-life superhero, using his coding powers to solve the
                  world's problems (well, at least the digital ones). And his problem-solving skills are so sharp, they could cut through steel - if only he had a giant pair of
                  scissors, he creates web applications that are both functional AND aesthetically pleasing (which is more than most people can say about themselves). Whether you
                  need a web application that works seamlessly across different devices or an app that simplifies your life, Vishal's got you covered. And don't worry, he won't
                  disappear into the night like <span className="batman-image">Batman</span> - he's always open to new challenges and opportunities{" "}
                  <span className="d-inline" data-toggle="tooltip" data-html="true" title={joke}>
                    (and probably a good joke or two)
                  </span>
                  . So, use the links below to get in touch with him, and who knows, you might just be working with the next tech genius!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center m-0 mt-3">
          <div className="col-md-12 text-center">
            <h3 className="mb-4" style={{ fontFamily: "Bradley Hand, cursive", display: "inline-block" }}>
              Languages and Tools
            </h3>
            <div className="d-flex justify-content-center align-items-center flex-wrap image-container mx-4">
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React" />
              <img alt="redux" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="Node.js" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.21.0/icons/express.svg" alt="Express.js" />
              <img src="https://i.postimg.cc/qvM6Q4NR/GFz-P-5e-400x400.png" alt="MongoDB" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" alt="Sass" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" alt="Bootstrap" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.1.0/icons/mui.svg" alt="Material-UI" />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/styled-components/styled-components.png"
                alt="Styled-Components"
              />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.21.0/icons/dsautomobiles.svg" alt="Data Structure" />
              <img alt="VSCode" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
              <img alt="jira-tool" src="https://img.icons8.com/color/512/jira.png" />
              <img alt="gitlab" src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" />
              <img alt="git" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
              <img alt="Terminal" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center translate">
            <a className="resume-link" href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/resume.jpg" alt="Resume" style={{ height: "50px", width: "50px" }} />
            </a>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 100 102" height="75" width="100%" preserveAspectRatio="none" className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0" fill="#F7F7F9" stroke="#E31B6D"></path>
      </svg>
      <section id="contact" className="tm-contact">
        <div className="contact-buttons">
          <a className="social-button btn-lg" href="https://www.linkedin.com/in/amvishal/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="social-button btn-lg" href="https://github.com/am-vishal" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="social-button btn-lg"
            href="https://profile.codingninjas.com/f8fa6fbf-1c5e-4dba-81ad-4e7737ef2e2d?_ga=2.6537204.791585496.1677261303-459940333.1674062638"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://classroom.codingninjas.com/assets-app/icons/cn-logo-light.svg" height="31px" alt="Coding Ninjas logo" />
          </a>
          <a className="social-button btn-lg" href="https://codepen.io/am_vishal" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-codepen"></i>
          </a>
        </div>
      </section>
      <footer className="fixed-bottom">Vishal ©2020-{new Date().getFullYear()}</footer>
    </>
  );
};
export default Home;
