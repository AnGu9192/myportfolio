import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdSchool} from 'react-icons/md';
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement className='vertical-timeline-elemenet--education' 
          date='2008-2012'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<MdSchool/>}>
            <h3 className="vertical-timeline-elemenet-title">
              European Regional Education Academy
            </h3>
            <p>Information Technologies</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-elemenet--education' 
          date='2013-2015'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<MdSchool/>}>
            <h3 className="vertical-timeline-elemenet-title">
             International Scientific-Education Center Of NAS
            </h3>
            <p>Information and Computer Engonnering</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience