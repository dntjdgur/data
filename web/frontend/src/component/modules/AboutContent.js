import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import Grid from '@mui/material/Grid';

export default function AboutContent() {
  const photoImage = require('../img/photo.jpg');

  return (
    <Fragment>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // height: '50%',
      }}>
        <Text style={{ color: 'black', fontSize: 28, }}>
          <h2>
            Sunghyuk Woo
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: '100%',
                  width: '100%',
                }}
                source={photoImage}
              />
            </Grid>
            <Grid item xs={9}>
              <h3>
                Data Scientist | Full Stack Developer
              </h3>
              <p style={{ fontSize: 18, }}>
                Versatile data scientist and a full stack developer, equipped with exceptional skills in programming languages and data analytics.
                Conducted various analytical research and data visualizations for multiple departments at Insight Shipping, inc., connected with theoretical statistics and machine learning algorithms to ensure a quality and detail-oriented analysis. Experiences as a full stack developer provide creative ways to visualize data and establish more efficient ETL pipelines for a quality and detail-oriented analysis. Leverage excellent organizational and time management skills, consistently motivate to incorporate new knowledge in a fast-paced environments.
              </p>
            </Grid>
          </Grid>

          <br/><br/><br/>
          <h3>
            Careers
          </h3>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h4 style={{ fontSize: 18, }}>
                Insight Shipping, inc.
              </h4>
              <h5 style={{ fontSize: 16, }}>
                Data Engineer | Full Stack Developer | IT Team Manager
              </h5>
              <p style={{ fontSize: 14, }}>
                Responsibilities:<br/>
                Full stack development of logistics systems and applications to provide better efficiency in internal operation procedures, and optimize customer interaction.<br/>
                Performing intensive data analysis for operations, pricing, and human resources department to leverage working environments and gain key insights.<br/>
                Using the data obtained from countless operation procedures, perform a detailed and quality analysis and data visualizations to provide CRM features for dedicated customers.<br/><br/>
                Contributions:<br/>
                ▪ Construct a user-friendly web interface to effectively deliver cargo information to the customer on a live-update basis.<br/>
                ▪ Utilizing various tools and libraries, constructed a cost and time effective API server to transmit JSON data to the front-end.<br/>
                ▪ Designed a database architecture and model to save user information and lively updated cargo information, using relational database and DBMS rules.<br/>
                ▪ Established a secure login features to effectively prevent any malicious attacks to both front-end and back-end.<br/>
                ▪ Integrated Tableau JS API features to the CRM webpage to bring key insights to the dedicated customers with exclusively developed ETL pipelines.<br/>
                ▪ Leveraged uses of online tracking tools over conventional e-mail communications with the customer, allowing better efficiency and productivity in operations.<br/>
                ▪ Developed and deployed logistic systems equipped with key functions, leveraging the work productivity and efficiency.<br/>
              </p>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2020. 06 - Present
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h4 style={{ fontSize: 18, }}>
                James Worldwide, inc.
              </h4>
              <h5 style={{ fontSize: 16, }}>
                Operation Team Manager | Assistant Manager
              </h5>
              <p style={{ fontSize: 14, }}>
                Responsibilities:<br/>
                Perform logistic coordinations and customs clearances, as well as dedicated customer services. Handle basic data analysis and maintain up-to-date accounts payable and receivable.<br/><br/>
                Contributions:<br/>
                ▪ Awarded 2018 "Employee of the year" for independently handling over 950 cases of logistics coordination, leveraging corporate cargo volume sales by 95% to the previous year's.<br/>
                ▪ Performed basic data analysis using VBA and excel, providing simpel CRM features to the customers.<br/>
                ▪ Lead task force team to educate the new employees of standard operation procedures, effective time and work management skills.<br/>
              </p>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2017. 05 - 2020. 06
              </p>
            </Grid>
          </Grid>
          <br/><br/>
          <h3>
            Project Experiences
          </h3>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h4 style={{ fontSize: 18, }}>
                Insight Shipping, inc.
              </h4>
              <h5 style={{ fontSize: 16, }}>
                Insight Warehouse Management System
              </h5>
              <p style={{ fontSize: 14, }}>
                Full Stack development of customized and fully fledged warehouse management system.<br/><br/>
                Features and Responsibilities:<br/>
                ▪ Designed and architect relational database models to save user login information, execute query statements and commits on user's needs.<br/>
                ▪ Implemented failsafe measures and establish effective locking mechanism to prevent race condition.<br/>
                ▪ Strict references to the DBMS rule of thumb to execute SQL queries in consideration of time and space complexity.<br/>
                ▪ Effectively manage project team and milestones to provide quality-assured delivereables on time.<br/>
                ▪ Developed a directive user interface to allow for an easy and better interaction with the application.<br/>
                ▪ Developed and deployed a dedicated API server in a cloud server to execute CRUD operations as instructed by the user, with minimized instance usage.<br/><br/>
                Programming Tools and Language Used:<br/>
                Python3 | React.js, Native JS | HTML5, CSS3.0 | MySQL
              </p>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2022. 02 - 2023. 03
              </p>
            </Grid>
          </Grid>   
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h5 style={{ fontSize: 16, }}>
                Insight Shipping Track & Trace Web Portal
              </h5>
              <p style={{ fontSize: 14, }}>
                Responsibilities:<br/>
                Full stack development of web portal to allow dedicated customers to track cargo information and receive live feedback.<br/><br/>
                Features and Responsibilities:<br/>
                ▪ Designed and architect relational database models to save user login information. <br/>
                ▪ Developed and implemented user customizations to swiftly change information sharing options. <br/>
                ▪ Developed and deployed a dedicated API server in a cloud server to operate 24/7 with little to no overhead in instance usage. <br/>
                ▪ Designed, implemented, and developed directive user interface to allow for better view by the customers. <br/>
                ▪ Performed an analysis in data retrieved from operations department, and provided visualized data as a CRM feature. <br/>
                ▪ Integrated Tableau Embedded JS API to the front-end to allow for dynamic user interaction with the visualizations. <br/>
                ▪ Implemented a scheduler to receive live updates in the database. <br/>
                ▪ Maintained robust security measures to effectively prevent any user information leakage. <br/>
                ▪ Respond to customer's feedbacks and needs to continue renovating the web portal services. <br/>
                Programming Tools and Language Used:<br/>
                Python3 | React.js, Native JS | HTML5, CSS3.0 | MySQL | GoogleAPI Apps Script
              </p>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2021. 06 - 2021. 12
              </p>
            </Grid>
          </Grid>
          <br/><br/>
          <h3>
            Education and Certification
          </h3>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h4 style={{ fontSize: 18, }}>
                Southern New Hampshire University
              </h4>
              <h5 style={{ fontSize: 16, }}>
                Master of Science in Data Analytics
              </h5>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2021. 08 - 2023. 02
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h4 style={{ fontSize: 18, }}>
                University of California, Irvine - Department of Continued Education
              </h4>
              <h5 style={{ fontSize: 16, }}>
                Data Analytics and Visualizations Certification Program
              </h5>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2019. 08 - 2020. 02
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <h4 style={{ fontSize: 18, }}>
                University of California, Irvine
              </h4>
              <h5 style={{ fontSize: 16, }}>
                Bachelor of Arts in Economics
              </h5>
            </Grid>
            <Grid item xs={3}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                2011. 09 - 2016. 06
              </p>
            </Grid>
          </Grid>
          <br/><br/>
          <h3>
            Skills and Proficiencies
          </h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h4 style={{ fontSize: 18, }}>
                Communication Languages
              </h4>
            </Grid>
            <Grid item xs={6}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                Korean (Proficiency: Native)<br/>
                Japanese (Proficiency: Native)<br/>
                English (Proficiency: Native)<br/>
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h4 style={{ fontSize: 18, }}>
                Programming Tools and Languages
              </h4>
            </Grid>
            <Grid item xs={6}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                Python 3.0 (Proficiency: Professional)<br/>
                Javascript (Proficiency: Professional)<br/>
                React.js | Vue.js | JQuery (Proficiency: Professional)<br/>
                MySQL | PostgresSQL (Proficiency: Professional)<br/>
                Java (Proficiency: Intermediate)<br/>
                R (Proficiency: Intermediate)<br/>
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h4 style={{ fontSize: 18, }}>
                Data Analytics Tools
              </h4>
            </Grid>
            <Grid item xs={6}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                Tableau (Proficiency: Professional)<br/>
                Power BI (Proficiency: Intermediate)<br/>
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h4 style={{ fontSize: 18, }}>
                Other Tools and Programs
              </h4>
            </Grid>
            <Grid item xs={8}>
              <p style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic'}}>
                Microsoft Word | Excel | Powerpoint | Outlook (Proficiency: Professional)<br/>
                Github Version Controls (Proficiency: Professional)<br/>
                GoogleAPI Apps Script (Proficiency: Professional)<br/>
              </p>
            </Grid>
          </Grid>
        </Text>
      </View>
    </Fragment>
  );
};