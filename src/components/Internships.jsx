import React from 'react';

const Internships = () => {
  return (
    <section
      id="internships"
      className="py-16 text-white"
      style={{
        background: 'linear-gradient(60deg, #24243e)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 18s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Internships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Internship Card 1 */}
          <div className="internship-card bg-gray-900 bg-opacity-70 shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">Nandha Infotech, Coimbatore</h3>
            <h4 className="text-xl font-medium text-cyan-300">Mobile App Development Intern</h4>
            <p className="text-gray-300 mt-4">
              Developed and deployed cross-platform mobile applications using Flutter and React Native. Integrated RESTful APIs for backend data processing and real-time updates.
              Designed and optimized UI/UX to enhance user experience and engagement. Implemented Firebase for authentication, real-time database, and cloud messaging.
            </p>
            <a
              href="/src/assets/david nandha infotech.pdf"
              target="_blank"
              className="inline-block mt-6 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              View Certificate
            </a>
          </div>

          {/* Internship Card 2 */}
          <div className="internship-card bg-gray-900 bg-opacity-70 shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">YBI Foundation</h3>
            <h4 className="text-xl font-medium text-cyan-300">Data Science Intern</h4>
            <p className="text-gray-300 mt-4">
              Contributed to real-world data science projects involving data preprocessing, exploratory data analysis, and predictive modeling. Utilized tools such as Python, Pandas, and Excel to uncover insights and build data-driven solutions.
              Provided actionable recommendations based on statistical findings and machine learning techniques. Collaborated with our team.
            </p>
            <a
              href="/src/assets/YBI.pdf"
              target="_blank"
              className="inline-block mt-6 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              View Certificate
            </a>
          </div>

          {/* Internship Card 3 */}
          <div className="internship-card bg-gray-900 bg-opacity-70 shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">CODTECH IT Solutions</h3>
            <h4 className="text-xl font-medium text-cyan-300">Data Analytics Intern</h4>
            <p className="text-gray-300 mt-4">
              Independently worked on analyzing datasets to identify patterns, trends, and outliers relevant to business insights. Created detailed Power BI dashboards to visually represent performance metrics and data summaries.
              Applied Python and Excel to preprocess data, perform statistical analysis, and generate meaningful reports that supported internal decision-making.
            </p>
            <a
              href="/src/assets/Codtech.pdf"
              target="_blank"
              className="inline-block mt-6 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
