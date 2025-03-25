import React, { useState } from "react";
import "./style.css";
import PlusButton from "./plusButton";

const College = ({ index, handleCollegeChange }) => {
  const [collegeDetails, setCollegeDetails] = useState({
    college: "",
    startDate: "",
    endDate: "",
    degree: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollegeDetails({
      ...collegeDetails,
      [name]: value,
    });
    handleCollegeChange(index, { ...collegeDetails, [name]: value });
  };

  return (
    <div className="experience-item">
      <h3>College {index + 1}</h3>
      <label>
        College
        <input
          type="text"
          name="college"
          value={collegeDetails.degree}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Start Date
        <input
          type="date"
          name="startDate"
          value={collegeDetails.startDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={collegeDetails.endDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Degree
        <textarea
          name="description"
          value={collegeDetails.degree}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default College;
