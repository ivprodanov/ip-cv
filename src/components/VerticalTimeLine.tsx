import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaSuitcase, FaSchool } from 'react-icons/fa';

export const VerticalTimeLine = () => {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2020 - October 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
  >
    <h3 className="vertical-timeline-element-title">Fullstack Web Developer at Swisscom AG</h3>
    <h4 className="vertical-timeline-element-subtitle">Ittigen, Bern</h4>
    <p>
      ReactJS, NodeJS, MongoDB, Express, Ant Design, Git
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="February 2020 - August 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
  >
    <h3 className="vertical-timeline-element-title">Web Developer at Swisscom AG</h3>
    <h4 className="vertical-timeline-element-subtitle">Ittigen, Bern</h4>
    <p>
      Frontend web development with VueJS
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2019 - February 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
  >
    <h3 className="vertical-timeline-element-title">RPA Developer at Swisscom AG</h3>
    <h4 className="vertical-timeline-element-subtitle">Worblaufen, Bern</h4>
    <p>
      Automation Anywhere, Robotic Process Automation
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="August 2019 - 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">GIBB</h3>
    <h4 className="vertical-timeline-element-subtitle">EFZ Applikationsentwicklung</h4>
    <p>
      Apprenticeship at Swisscom AG
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2018 - 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Berner Fachhochschule, Bern, Switzerland</h3>
    <h4 className="vertical-timeline-element-subtitle">University</h4>
    <p>
      Informatik
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2017"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Burgas Free University</h3>
    <h4 className="vertical-timeline-element-subtitle">University</h4>
    <p>
      Computer Systems and Technologies
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2015 - November 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">University of Portsmouth, Porstmouth, England</h3>
    <h4 className="vertical-timeline-element-subtitle">University</h4>
    <p>
      Web Technologies BSc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2011 - 2015"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">English Gymnasium 'Geo Milev'</h3>
    <h4 className="vertical-timeline-element-subtitle">High School Diploma</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  )
}
