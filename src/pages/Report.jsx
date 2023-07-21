import React, { useState } from 'react';

const Report = () => {
  const [reportTitle, setReportTitle] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [savedReports, setSavedReports] = useState([]);

  const handleTitleChange = (e) => {
    setReportTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setReportDescription(e.target.value);
  };

  const handleSaveReport = (e) => {
    e.preventDefault();

    const newReport = {
      id: Date.now(),
      title: reportTitle,
      description: reportDescription,
      date: new Date().toLocaleDateString(),
      day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
      username: 'Mobile Web Ghana',
    };

    setSavedReports([...savedReports, newReport]);
    setReportTitle('');
    setReportDescription('');
  };

  const handleDeleteReport = (id) => {
    const updatedReports = savedReports.filter((report) => report.id !== id);
    setSavedReports(updatedReports);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Reports</h1>

      <form onSubmit={handleSaveReport}>
        <div className="mb-4">
          <label htmlFor="reportTitle" className="block text-lg font-medium">
            Report Title
          </label>
          <input
            id="reportTitle"
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            value={reportTitle}
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reportDescription" className="block text-lg text-[#beb9b9] font-medium">
            Report Description
          </label>
          <textarea
            id="reportDescription"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
            value={reportDescription}
            onChange={handleDescriptionChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Save Report
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Saved Reports</h2>
        <ul>
          {savedReports.map((report) => (
            <li
              key={report.id}
              className="mb-4 border border-gray-300 p-4 rounded-md"
              onClick={() => handleDeleteReport(report.id)}
            >
              <h3 className="text-lg font-medium">{report.title}</h3>
              <p className="text-sm text-gray-600">
                Date: {report.date} ({report.day})
              </p>
              <p className="text-sm text-gray-600">Username: {report.username}</p>
              <p>{report.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
