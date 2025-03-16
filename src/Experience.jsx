import "./style.css";

export default function Experience({
  personalExperience,
  setPersonalExperience,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalExperience({
      ...personalExperience,
      [name]: value,
    });
  }

  return (
    <div className="form-and-resume">
      {/* Form Section */}
      <div className="form-section">
        <h2>Experience</h2>

        <label>
          Position
          <input
            name="position"
            value={personalExperience.position}
            onChange={handleChange}
          />
        </label>

        <label>
          Company
          <input
            name="company"
            value={personalExperience.company}
            onChange={handleChange}
          />
        </label>

        <label>
          Start Date
          <input
            name="startDate"
            value={personalExperience.startDate}
            onChange={handleChange}
          />
        </label>

        <label>
          End Date:
          <input
            name="endDate"
            value={personalExperience.endDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Responsibilities
          <input
            name="responsibilities"
            value={personalExperience.responsibilities}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="resume-preview">
        <h1>{personalExperience.position || "Position"}</h1>
        <h2>{personalExperience.company || "Company"}</h2>
        <div className="contact-info">
          <p>{personalExperience.startDate || "Start Date"}</p>
          <p>{personalExperience.endDate || "End Date"}</p>
          <p>{personalExperience.responsibilities || "Responsibilities"}</p>
        </div>
      </div>
    </div>
  );
}
