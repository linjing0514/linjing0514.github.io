import React from 'react'
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
function Experiences() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='May 2022- Present'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Engineer, Comcast, Remote
          </h3>
          <p>
            <ul>
              <li>Automated the data feeding using Python and data cleaning process in Databricks to reflect the latest insights of data sets with minimal human intervention</li>
              <li>Delivered various visulizations for frequently asked questions that business have to cut down the time to the solution, to focus on they need to address chronic customers/sites and reduce their ticket queue with better prioritization rules</li>
              <li>Integrated and Aggregate the huge data from various sources to add extra information to the tickets trends to identify elements that result in poor performance, i.e. specific device types, models, firmware, etc</li>
              <li>Forcasting the number of monitoring tickets will be generated by using the Prophet with considerations of trends, seasonality, and holidays</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Jul. 2021-Present'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Engineer, Tata Consultancy Services, NJ
          </h3>
          <p>
            <ul>
              <li>
                Implement the feature of generating reports based on date, product name, and email using HTML, NodeJS, MongoDB and Bootstrap
              </li>
              <li>
                Collaborated and split and assigned the work as the team leader to each team member based on the result of discussion
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Aug. 2017- June 2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Rose-Hulman Institute of Technology, Terre Haute, IN
          </h3>
          <p>Honours Bachelor of Computer Science, Mathematics Minor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Jun. 2019- May 2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            College Teacher Assistant, RHIT, IN
          </h3>
          <p>
            <ul>
              <li>
              Discussed and wrote the test cases with other TAs using the framwork JUnit and Collaborated with Professor sand TAs to review the coursework
              </li>
              <li>
              Explained and answered students’ questions through Campuswire, Piazza, and emails and provided detailed feedback for students so they can learn from mistakes
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2016-2017'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Indiana State University, Terre Haute, IN
          </h3>
          <p>transfer to Rose-Hulman Institute of Technology as Computer Science Major student</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2012-2016'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Terre Haute South High School, Terre Haute, IN
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2011-2012'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Woodrew Wilson Middle School, Terre Haute, IN
          </h3>
          <p>First School I went to in United States</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  )
}

export default Experiences