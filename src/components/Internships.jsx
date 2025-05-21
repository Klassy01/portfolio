import React from 'react';

const Internships = () => {
  return (
    <section
      id="internships"
      className="py-16 text-white"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 0, 100, 0.15), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.15), transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.1), transparent 50%),
          #000000
        `,
        backgroundBlendMode: 'screen',
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Internships</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Internship Card 1 */}
          <div className="internship-card bg-gray-900 bg-opacity-70 rounded-lg p-6 border border-gray-700 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-semibold text-white">Nandha Infotech, Coimbatore</h3>
            <h4 className="text-xl font-medium text-cyan-300">Mobile App Development Intern</h4>
            <p className="text-gray-300 mt-4">
              Developed and deployed cross-platform mobile applications using Flutter and React Native. Integrated RESTful APIs for backend data processing and real-time updates.
              Designed and optimized UI/UX to enhance user experience and engagement. Implemented Firebase for authentication, real-time database, and cloud messaging.
            </p>
            <a
              href="/src/assets/david nandha infotech.pdf"
              target="_blank"
              className="mt-6 inline-block text-cyan-400 font-medium hover:underline hover:text-cyan-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>

          {/* Internship Card 2 */}
          <div className="internship-card bg-gray-900 bg-opacity-70 rounded-lg p-6 border border-gray-700 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-semibold text-white">YBI Foundation</h3>
            <h4 className="text-xl font-medium text-cyan-300">Data Science Intern</h4>
            <p className="text-gray-300 mt-4">
              Contributed to real-world data science projects involving data preprocessing, exploratory data analysis, and predictive modeling. Utilized tools such as Python, Pandas, and Excel to uncover insights and build data-driven solutions.
              Provided actionable recommendations based on statistical findings and machine learning techniques. Collaborated with our team.
            </p>
            <a
              href="/src/assets/YBI.pdf"
              target="_blank"
              className="mt-6 inline-block text-cyan-400 font-medium hover:underline hover:text-cyan-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>

          {/* Internship Card 3 */}
          <div className="internship-card bg-gray-900 bg-opacity-70 rounded-lg p-6 border border-gray-700 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-semibold text-white">CODTECH IT Solutions</h3>
            <h4 className="text-xl font-medium text-cyan-300">Data Analytics Intern</h4>
            <p className="text-gray-300 mt-4">
              Independently worked on analyzing datasets to identify patterns, trends, and outliers relevant to business insights. Created detailed Power BI dashboards to visually represent performance metrics and data summaries.
              Applied Python and Excel to preprocess data, perform statistical analysis, and generate meaningful reports that supported internal decision-making.
            </p>
            <a
              href="/src/assets/Codtech.pdf"
              target="_blank"
              className="mt-6 inline-block text-cyan-400 font-medium hover:underline hover:text-cyan-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
