import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    townState: "",
    cellNumber: "",
    email: "",
  });

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  }

  function handleExperienceChange(e) {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  }

  return (
    <div className="container">
      <div className="form-section">
        <h2>Personal Details</h2>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={personalDetails.fullName}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Town/State
          <input
            type="text"
            name="townState"
            value={personalDetails.townState}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Cell Number
          <input
            type="text"
            name="cellNumber"
            value={personalDetails.cellNumber}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={personalDetails.email}
            onChange={handlePersonalChange}
          />
        </label>

        <h2>Experience</h2>
        <label>
          Position
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleExperienceChange}
          />
        </label>
        <label>
          Company
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleExperienceChange}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={handleExperienceChange}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={handleExperienceChange}
          />
        </label>
        <label>
          Responsibilities
          <textarea
            name="responsibilities"
            value={experience.responsibilities}
            onChange={handleExperienceChange}
          />
        </label>
      </div>

      <div className="resume-preview">
        <div className="resume-header">
          <h1>{personalDetails.fullName || "Your Name"}</h1>
          <p>{personalDetails.townState || "Town/State"}</p>
          <p>{personalDetails.cellNumber || "Cell Number"}</p>
          <p>{personalDetails.email || "Email Address"}</p>
        </div>

        <div className="resume-experience">
          <h2>Experience</h2>
          <h3>{experience.position || "Position"}</h3>
          <p>{experience.company || "Company"}</p>
          <p>
            {experience.startDate || "Start Date"} -{" "}
            {experience.endDate || "End Date"}
          </p>
          <p>{experience.responsibilities || "Responsibilities go here..."}</p>
        </div>
      </div>
    </div>
  );
}
