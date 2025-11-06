"use client";
import React from "react";
import html2pdf from "html2pdf.js";

const Certificate = ({ studentName, courseName }) => {
  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    html2pdf().from(element).save("certificate.pdf");
  };

  return (
    <div>
      <style>{`
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #e0f7fa;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .certificate {
          background: #ffffff;
          border: 10px solid #007acc;
          padding: 40px;
          width: 800px;
          text-align: center;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin: auto;
        }

        .certificate h1 {
          color: #007acc;
          margin-bottom: 0;
          font-size: 2.5rem;
        }

        .certificate h2 {
          font-weight: normal;
          color: #333;
          font-size: 1.2rem;
          margin-top: 10px;
        }

        .certificate .student-name {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          margin: 30px 0 10px;
        }

        .certificate .text {
          color: #555;
          font-size: 1rem;
          margin: 0 20px;
        }

        .certificate .footer {
          margin-top: 50px;
          font-size: 0.9rem;
          color: #666;
        }

        .btn-download {
          margin-top: 30px;
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #007acc;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .btn-download:hover {
          background-color: #005f99;
        }
      `}</style>

      <div className="certificate" id="certificate">
        <h1>
          CERTIFICATE
          <br />
          OF ACHIEVEMENT
        </h1>
        <h2>This Certificate is Proudly Presented To</h2>

        <div className="student-name">{studentName}</div>

        <p className="text">
          For successfully completing the <strong>{courseName}</strong> offered by{" "}
          <strong>Furious Learning Management System</strong>,<br />
          in recognition of their dedication and effort in acquiring new knowledge and skills.
        </p>

        <div className="footer">&copy; Furious LMS</div>

        <button className="btn-download" onClick={downloadPDF}>
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;

