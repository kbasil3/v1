import "./style.css";

export default function PersonalDetails({
  personalDetails,
  setPersonalDetails,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  }

  return (
    <div className="form-and-resume">
      <div className="form-section">
        <h2>Personal Details</h2>

        <label>
          Name
          <input
            name="fullName"
            value={personalDetails.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Town/State
          <input
            name="townState"
            value={personalDetails.townState}
            onChange={handleChange}
          />
        </label>

        <label>
          Number
          <input
            name="cellNumber"
            value={personalDetails.cellNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={personalDetails.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="resume-preview">
        <h1>{personalDetails.fullName || "Your Name"}</h1>
        <div className="contact-info">
          <p>{personalDetails.townState || "Town/State"}</p>
          <p>{personalDetails.cellNumber || "Phone Number"}</p>
          <p>{personalDetails.email || "Email Address"}</p>
        </div>
      </div>
    </div>
  );
}
