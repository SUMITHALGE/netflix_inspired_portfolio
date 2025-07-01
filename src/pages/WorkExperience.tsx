import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

const WorkExperience: React.FC = () => {
  const data = [
    {
      "name": "Paarsh Infotech (Nashik,Maharashtra)",
      "timelineType": "work",
      "title": "Java Developer · Internship",
      "techStack": "Javascript, Typescript, Java, React ",
      "summaryPoints": "- Develops new features and projects to aid in increasing the company’s efficiency and improving website performance by Using RestAPI.\n- Build And Optimized RESTFUL-Api Using Spring Boot For Reducing The Response time By 30 %.",
      "dateRange": "Jan 2025 - Present"
    },
    {
      "name": "Maharshtra Institute Of Technology",
      "timelineType": "education",
      "title": "Master's 🏅",
      "techStack": "",
      "summaryPoints": "💻 Master of  Computer Application. Predicted graduation in June 2025.",
      "dateRange": "June 2023 - June 2025 "
    },
    {
      "name": "Deogiri Collage of Science And Technology",
      "timelineType": "education",
      "title": "Bachelor Degree 🎓",
      "techStack": "",
      "summaryPoints": "📜 Graduated In Bsc.Biotechnology. CGPA : 7.89 ",
      "dateRange": "May 2018 - March 2022"
    },
    {
      "name": "Chhatrapti college of Science Chh.Sambhajinagar",
      "timelineType": "education",
      "title": "Higher Education 🏆",
      "techStack": "",
      "summaryPoints": "I pursued my 11th and 12th in the Science stream at Chhatrapati College, Chhatrapati Sambhajinagar, where I adapted various skills such as critical thinking, problem-solving, and analytical reasoning, which have helped shape my academic and professional journey.",
      "dateRange": "2018"
    },
    {
      "name": "Shree Saraswati Bhuvan High School,Ranjani",
      "timelineType": "education",
      "title": "Primary Education 🏆",
      "techStack": "",
      "summaryPoints": "I completed my schooling from 1st standard to 10th standard at Shree Saraswati Bhuvan High School, where I built a strong academic foundation and developed essential skills for my future education and career.",
      "dateRange": "2016"
    },
  ];

  const timeLineData: TimelineItem[] = data;

  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: '#1e1e1e', color: '#fff' }
                  : { background: '#1e1e1e', color: '#fff' }
                : { background:'rgb(45, 45, 45)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid #1e1e1e' : '7px solid #1e1e1e' }
                : { borderRight: '7px solid rgb(45, 45, 45)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(179, 0, 0)', color: '#fff' }
                : { background: 'rgb(154, 0, 0)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'white' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{color:'rgb(155, 155, 155)'}}>{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <h4 style={{color:'rgb(220, 220, 220)'}}>
                {item.summaryPoints.split('\n').map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
                </h4>
              </div>
            ) : (
              <div style={{ color: 'white' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{color:'rgb(155, 155, 155)'}}>{item.title}</h4>
                <h4 style={{color:'rgb(220, 220, 220)'}}>
                {item.summaryPoints.split('\n').map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
                </h4> 
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;