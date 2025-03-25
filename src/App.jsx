import React, { useState } from "react";
import PlusButton from "./plusButton";
import Experience from "./Experience";
import College from "./College";
import "./style.css";

const App = () => {
  const [experienceCount, setExperienceCount] = useState(1);
  const [collegeCount, setCollegeCount] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    townState: "",
    cellNumber: "",
    email: "",
  });
  const [experiences, setExperiences] = useState([
    { jobTitle: "", company: "", startDate: "", endDate: "", description: "" },
  ]);
  const [college, setCollege] = useState([
    { college: "", startDate: "", endDate: "", degree: "" },
  ]);

  const handleAddExperience = () => {
    setExperienceCount(experienceCount + 1);
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleAddCollege = () => {
    setCollegeCount(collegeCount + 1);
    setCollege([
      ...college,
      {
        college: "",
        startDate: "",
        endDate: "",
        degree: "",
      },
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const handleExperienceChange = (index, updatedExperience) => {
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? updatedExperience : exp
    );
    setExperiences(updatedExperiences);
  };

  const handleCollegeChange = (index, updatedCollege) => {
    const updatedColleges = college.map((exp, i) =>
      i === index ? updatedCollege : exp
    );
    setCollege(updatedColleges);
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>Personal Details</h2>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={personalDetails.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Town/State:
          <input
            type="text"
            name="townState"
            value={personalDetails.townState}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cell Number:
          <input
            type="text"
            name="cellNumber"
            value={personalDetails.cellNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={personalDetails.email}
            onChange={handleInputChange}
          />
        </label>

        <h2>Experience</h2>
        {[...Array(experienceCount)].map((_, index) => (
          <Experience
            key={index}
            index={index}
            handleExperienceChange={handleExperienceChange}
          />
        ))}
        <PlusButton
          style={{ marginTop: "10px" }}
          onClick={handleAddExperience}
        />
        <h2>College</h2>
        {[...Array(collegeCount)].map((_, index) => (
          <College
            key={index}
            index={index}
            handleCollegeChange={handleCollegeChange}
          />
        ))}
        <PlusButton style={{ marginTop: "10px" }} onClick={handleAddCollege} />
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
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.jobTitle || "Job Title"}</h3>
              <p>{exp.company || "Company"}</p>
              <p>
                {exp.startDate || "Start Date"} - {exp.endDate || "End Date"}
              </p>
              <p>{exp.description || "Description"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
