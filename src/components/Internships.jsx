import React from 'react';
import '../styles/internships.css';

const Internships = () => {
  return (
    <section id="internships" className="internships">
      <h2>Internships</h2>
      <div className="internship-container">

        <div className="internship-card">
          <h3>Nandha Infotech, Coimbatore</h3>
          <h4>Mobile App Development Intern</h4>
          <p>
            Developed and deployed cross-platform mobile applications using Flutter and React Native.
            Integrated RESTful APIs for backend data processing and real-time updates.
            Designed and optimized UI/UX to enhance user experience and engagement.
            Implemented Firebase for authentication, real-time database, and cloud messaging.
          </p>
          <a href="path/to/certificate1.pdf" target="_blank" className="btn">View Certificate</a>
        </div>

        <div className="internship-card">
          <h3>YBI Foundation</h3>
          <h4>Data Science Intern</h4>
          <p>
            Contributed to real-world data science projects involving data preprocessing, 
            exploratory data analysis, and predictive modeling. Utilized tools such as Python, 
            Pandas, and Excel to uncover insights and build data-driven solutions. Provided 
            actionable recommendations based on statistical findings and machine learning techniques.
            Collaborated with our team. 
          </p>
          <a href="C:\Users\david\OneDrive\Desktop\Portfolio\david-portfolio/src/assets/YBI.pdf" target="_blank" className="btn">View Certificate</a>
        </div>

        <div className="internship-card">
          <h3>CODTECH IT Solutions</h3>
          <h4>Data Analytics Intern</h4>
          <p>
            Independently worked on analyzing datasets to identify patterns, trends, and outliers relevant to business insights. 
            Created detailed Power BI dashboards to visually represent performance metrics and data summaries. 
            Applied Python and Excel to preprocess data, perform statistical analysis, and generate meaningful reports 
            that supported internal decision-making.
          </p>
          <a href="/src/assets/Codtech.pdf" target="_blank" className="btn">View Certificate</a>
        </div>

      </div>
    </section>
  );
};

export default Internships;
