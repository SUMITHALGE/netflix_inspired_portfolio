import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaGitAlt } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiJavascript, SiPhp, SiTypescript, SiMysql, SiKubernetes, SiGooglecloud, SiGo, SiPython, SiRedis, SiArchlinux, SiNixos, SiPostman, SiFigma, SiGraphql, SiFastapi, SiDirectus, SiPortainer } from 'react-icons/si';
import { Project } from '../types';
// import { getProjects } from '../queries/getProjects';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  // 'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'Rubyonrails': <SiRubyonrails />,
  'NodeJs': <FaNodeJs />,
  // 'Java': <FaJava />,
  'Javascript': <SiJavascript />,
  'Php': <SiPhp />,
  // 'React': <FaReact />,
  'Typescript': <SiTypescript/>,
  'Aws': <FaAws />,
  // 'Docker': <FaDocker />,
  'Postgresql': <SiPostgresql />,
  'Mysql': <SiMysql />,
  'Kubernetes': <SiKubernetes />,
  'Googlecloud': <SiGooglecloud />,
  'Go': <SiGo />,
  // 'Python': <SiPython />,
  'GitAlt': <FaGitAlt />,
  'Mongodb': <SiMongodb />,
  'Redis': <SiRedis />,
  'Archlinux': <SiArchlinux />,
  'Nixos': <SiNixos />,
  'Postman': <SiPostman />,
  'Figma': <SiFigma />,
  'Graphql': <SiGraphql />,
  'Fastapi': <SiFastapi />,
  'Directus': <SiDirectus />,
  'Portainer': <SiPortainer />
};


const Projects: React.FC = () => {
  // const [projects, setProjects] = useState<Project[]>([])

  // useEffect(() => { 
  //   async function fetchProjects() {
  //     const data = await getProjects();
  //     setProjects(data);
  //   }

  //   fetchProjects()
  // }, [])

  const data = [
    {
      "title": "Personal Portfolio Website",
      "description": "This is a sleek and modern personal portfolio website designed using React, TypeScript, HTML, and JavaScript, with DatoCMS integrated for seamless content management. The website showcases projects, skills, and experience in a clean, responsive, and dynamic layout. With TypeScript, the codebase is more maintainable and type-safe, while React ensures a smooth user experience with fast, interactive UI components. DatoCMS enables effortless content updates without modifying the code.",
      "techUsed": "Javascript, React, PostgreSQL, Docker, Typescript, GitHub, "
      ,
      "image": {
        "url": "../images/netflix.png"
      }
    },
    {
      "title": "SMS Automation Using Python",
      "description": "SMS Automation with Python is a solution designed to streamline the process of sending and managing text messages efficiently. Utilizing Python's robust libraries and APIs, this system enables users to automate SMS workflows for a variety of applications, such as reminders, notifications, marketing campaigns, or customer support. By leveraging tools like Twilio or FastAPI, the automation process integrates seamlessly with external platforms, ensuring reliable message delivery and tracking",
      "techUsed": "Python",
      "image": {
        "url": "../images/sms.png"
      }
    },
    {
      "title": "Medicine On Time",
      "description": "Medicine on Time is a mobile application developed as a college project using Kotlin and Java in Android Studio. The app is designed to enhance medication adherence by allowing users to easily add various types of medicines to their personalized schedules and set reminders for timely intake. With a focus on simplicity and efficiency, Medicine on Time provides a user-friendly interface that caters to individuals with diverse medical needs. By bridging the gap between busy lifestyles and essential health routines, the application serves as a practical tool for promoting better health management and convenience",
      "techUsed": "Androidtudio, Kotlin, Java",
      "image": {
        "url": "../images/medicine.png"
      }
    },
  
    {
      "title": "Point of Sale System",
      "description": "Developed a POS system for managing sales, inventory, and customer data for a retail store. Incorporating authentication, product management, and sales tracking.",
      "techUsed": "ReactJS, NodeJS, PostgreSQL, GCP",
      "image": {
        "url": "../images/POS.png"
      }
    },
  ]

  const projects: Project[] = data;

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
        <h2 className="project-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
