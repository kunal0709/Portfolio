






// import "../stylesheet/skills.css";
// import { useEffect, useRef } from "react";

// function Skills() {
//   const scrollRef = useRef(null);

//   const frontendSkills = [
//     { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//     { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//     { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//     { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
//     { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
//     { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//     { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//     { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//     { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
//   ];

//   useEffect(() => {
//     const container = scrollRef.current;
//     let scrollSpeed = 0.8; // Thoda fast scroll for better visual
//     let animationId;
//     let isHovered = false;

//     const autoScroll = () => {
//       if (!isHovered) {
//         container.scrollLeft += scrollSpeed;
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }
//       animationId = requestAnimationFrame(autoScroll);
//     };

//     const handleMouseEnter = () => isHovered = true;
//     const handleMouseLeave = () => isHovered = false;

//     container.addEventListener("mouseenter", handleMouseEnter);
//     container.addEventListener("mouseleave", handleMouseLeave);

//     autoScroll();

//     return () => {
//       cancelAnimationFrame(animationId);
//       container.removeEventListener("mouseenter", handleMouseEnter);
//       container.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div className="skills-section">
//       <div className="skills-header">
//         <h2 className="skills-title">My Skills</h2>
//         <p className="skill-text">
//           A collection of tools and technologies I work with to create modern web experiences.
//         </p>
//       </div>

//       <div className="skills-container">
//         {/* Gradients for fade effect on edges */}
//         <div className="fade-left"></div>
//         <div className="fade-right"></div>
        
//         <div className="skills-grid" ref={scrollRef}>
//           {[...frontendSkills, ...frontendSkills].map((skill, i) => (
//             <div key={i} className="skill-card">
//               <div className="icon-box">
//                 <img src={skill.icon} alt={skill.name} />
//               </div>
//               <p>{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;






import "../stylesheet/skills.css";
import { useEffect, useRef } from "react";

function Skills() {
  const scrollRef = useRef(null);

  const frontendSkills = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let scrollSpeed = 0.8;
    let animationId;
    let isHovered = false;

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    autoScroll();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">My Skills</h2>
        <p className="skill-text">
          A collection of tools and technologies I work with to create modern web experiences.
        </p>
      </div>

      <div className="skills-container">
        <div className="fade-left"></div>
        <div className="fade-right"></div>
        
        <div className="skills-grid" ref={scrollRef}>
          {[...frontendSkills, ...frontendSkills].map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="icon-box">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;  