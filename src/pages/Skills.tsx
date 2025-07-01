import React, { useEffect, useState } from 'react';
import './Skills.css';
// import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaJs } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiAndroidstudio, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiJavascript, SiGo, SiPython, SiMongodb, SiRedis, SiArchlinux, SiNixos, SiPostman, SiFigma, SiGraphql, SiFastapi,SiKotlin} from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiGo: <SiGo />,
  SiPython: <SiPython />,
  FaGitAlt: <FaGitAlt />,
  SiMongodb: <SiMongodb />,
  SiRedis: <SiRedis />,
  SiArchlinux: <SiArchlinux />,
  SiNixos: <SiNixos />,
  SiPostman: <SiPostman />,
  SiFigma: <SiFigma />,
  SiGraphql: <SiGraphql />,
  SiFastapi: <SiFastapi />,
  SiKotlin: <SiKotlin />,
   SiNetlify: <SiNetlify />,
  SiAndroidstudio: <SiAndroidstudio />
  // SiHeroku: <SiHeroku />,
  // SiRabbitmq: <SiRabbitmq />,
  // SiImessage: <SiImessage />,
};


const Skills: React.FC = () => {

  // const [skillsData, setSkillsData] = useState<Skill[]>([]);

  const data = [
         {
          "name": "Java",
          "category": "Backend",
          "description": "",
          "icon": "FaJava"
        },
        {
          "name": "JavaScript",
          "category": "Backend",
          "description": "",
          "icon": "SiJavascript"
       },
        {
          "name": "TypeScript",
          "category": "Backend",
          "description": "",
          "icon": "SiTypescript"
      },
      {
          "name": "Python",
          "category": "Backend",
          "description": "",
          "icon": "SiPython"
      },
   
      {
        "name": "Php",
        "category": "Backend",
        "description": "",
        "icon": "SiPhp"
      },
   
      
      {
          "name": " CI/CD",
          "category": "Cloud & DevOps",
          "description": "Continuous Integration & Delivery",
          "icon": "FaGitAlt"
      },
      {
          "name": "Kubernetes",
          "category": "Cloud & DevOps",
          "description": "Container Orchestration",
          "icon": "SiKubernetes"
      },
      {
          "name": "Docker",
          "category": "Cloud & DevOps",
          "description": "Containerization",
          "icon": "FaDocker"
      },
      {
          "name": "GCP",
          "category": "Cloud & DevOps",
          "description": "Google Cloud Platform",
          "icon": "SiGooglecloud"
      },
      {
          "name": "AWS",
          "category": "Cloud & DevOps",
          "description": "Amazon Web Services",
          "icon": "FaAws"
      },
       {
          "name": "NETLIFY",
          "category": "Cloud & DevOps",
          "description": "Hosting Service",
          "icon": "SiNetlify"
      },
      {
          "name": "PostgreSQL",
          "category": "Databases",
          "description": "Relational Database",
          "icon": "SiPostgresql"
      },
      {
          "name": "MySQL",
          "category": "Databases",
          "description": "Relational Database",
          "icon": "SiMysql"
      },
      {
        "name": "MongoDB",
        "category": "Databases",
        "description": "noSQL Database",
        "icon": "SiMongodb"
      },
   
      {
          "name": "HTML & CSS",
          "category": "Frontend",
          "description": "Web Markup and Styling",
          "icon": "SiHtml5"
      },
      {
          "name": "JavaScript",
          "category": "Frontend",
          "description": "Scripting Language",
          "icon": "FaNodeJs"
      },
      {
          "name": "TypeScript",
          "category": "Frontend",
          "description": "Type-safe JavaScript",
          "icon": "SiTypescript"
      },
      {
          "name": "React",
          "category": "Frontend",
          "description": "Frontend Framework",
          "icon": "FaReact"
      },
    
      {
        "name": "GraphQL",
        "category": "Other Tools & Practices",
        "description": "API Query Language",
        "icon": "SiGraphql"
      },
      {
        "name": "FastAPI",
        "category": "Other Tools & Practices",
        "description": "Python API Framework",
        "icon": "SiFastapi"
      },
      {
        "name": "Postman",
        "category": "Other Tools & Practices",
        "description": "Api Testing",
        "icon": "SiPostman"
      },
      {
        "name": "Figma",
        "category": "Other Tools & Practices",
        "description": "Design & Prototyping",
        "icon": "SiFigma"
      },
  ]

  // useEffect(() => {
  //   setSkillsData(data);
  // }, []);

  const skillsData: Skill[] = data;

  // useEffect(() => {
  //   async function fetchSkills() {
  //     const data = await getSkills();
  //     setSkillsData(data);
  //   }

  //   fetchSkills()
  // }, []);

  // console.log(skillsData);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
