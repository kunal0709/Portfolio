



import React from "react";
// import kunal from "../assets/kuku.png";
import "../stylesheet/about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-main">
        <div className="left-about">
          <div className="about">
            <h2>About Me</h2>
          </div>
          <p className="about-text">
            I am a passionate and dedicated Full Stack Developer with a strong
            interest in building modern, responsive, and user-friendly web
            applications. I enjoy turning ideas into real-world digital
            experiences through clean code and thoughtful design. I have hands-on
            experience with front-end technologies like React, HTML, CSS, and
            JavaScript, and I continuously work on improving my skills in both
            front-end and back-end development. I focus on writing scalable,
            maintainable code and always aim to create smooth and engaging user
            interfaces. Beyond coding, I enjoy learning new technologies,
            exploring creative design concepts, and solving real-world problems.
          </p>
        </div>

        <div className="right-about">
          <img src="https://i.pinimg.com/1200x/c5/29/40/c52940bef6c1fa13dcecbaa41d73be50.jpg" alt="" />
          {/* <img src={kunal} alt="Kunal" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;