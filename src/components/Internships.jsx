import React from 'react';

const Internships = () => {
  return (
    <section
      id="internships"
      className="py-16 text-white"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Internship Card 1 */}
          <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 p-6 flex flex-col justify-between hover:scale-105 hover:border-cyan-400 hover:bg-white/20 hover:shadow-[0_0_20px_0_rgba(0,255,255,0.6)]">
            <h3 className="text-2xl font-semibold text-white">Nandha Infotech, Coimbatore</h3>
            <h4 className="text-xl font-medium text-cyan-300 mt-1">Mobile App Development Intern</h4>
            <p className="text-gray-300 mt-4">
              Developed and deployed cross-platform mobile applications using Flutter and React Native. Integrated RESTful APIs for backend data processing and real-time updates.
              Designed and optimized UI/UX to enhance user experience and engagement. Implemented Firebase for authentication, real-time database, and cloud messaging.
            </p>
            <a
              href="/assets/david-nandha-infotech.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-cyan-400 font-medium hover:underline hover:text-cyan-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>

          {/* Internship Card 2 */}
          <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 p-6 flex flex-col justify-between hover:scale-105 hover:border-cyan-400 hover:bg-white/20 hover:shadow-[0_0_20px_0_rgba(0,255,255,0.6)]">
            <h3 className="text-2xl font-semibold text-white">YBI Foundation</h3>
            <h4 className="text-xl font-medium text-cyan-300 mt-1">Data Science Intern</h4>
            <p className="text-gray-300 mt-4">
              Contributed to real-world data science projects involving data preprocessing, exploratory data analysis, and predictive modeling. Utilized tools such as Python, Pandas, and Excel to uncover insights and build data-driven solutions.
              Provided actionable recommendations based on statistical findings and machine learning techniques. Collaborated with our team.
            </p>
            <a
              href="/assets/YBI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-cyan-400 font-medium hover:underline hover:text-cyan-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>

          {/* Internship Card 3 */}
          <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 p-6 flex flex-col justify-between hover:scale-105 hover:border-cyan-400 hover:bg-white/20 hover:shadow-[0_0_20px_0_rgba(0,255,255,0.6)]">
            <h3 className="text-2xl font-semibold text-white">CODTECH IT Solutions</h3>
            <h4 className="text-xl font-medium text-cyan-300 mt-1">Data Analytics Intern</h4>
            <p className="text-gray-300 mt-4">
              Independently worked on analyzing datasets to identify patterns, trends, and outliers relevant to business insights. Created detailed Power BI dashboards to visually represent performance metrics and data summaries.
              Applied Python and Excel to preprocess data, perform statistical analysis, and generate meaningful reports that supported internal decision-making.
            </p>
            <a
              href="/assets/Codtech.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
