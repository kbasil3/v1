import React, { useState } from "react";
import "./style.css";
import PlusButton from "./plusButton";

const Experience = ({ index, handleExperienceChange }) => {
  const [experienceDetails, setExperienceDetails] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperienceDetails({
      ...experienceDetails,
      [name]: value,
    });
    handleExperienceChange(index, { ...experienceDetails, [name]: value });
  };

  return (
    <div className="experience-item">
      <h3>Experience {index + 1}</h3>
      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          value={experienceDetails.jobTitle}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={experienceDetails.company}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={experienceDetails.startDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={experienceDetails.endDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={experienceDetails.description}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default Experience;
