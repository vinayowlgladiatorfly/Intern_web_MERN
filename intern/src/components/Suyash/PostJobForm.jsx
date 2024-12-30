import React, { useState } from "react";
import "./PostJobForm.css"; // Import the CSS file for styling

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    industryArea: "",
    monthlySalary: "",
    location: "",
    employmentStatus: "",
    employmentType: "",
    positions: "",
    experience: "",
    gender: "",
    nationality: "",
    jobDetail: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    alert(
      `Job Title: ${formData.jobTitle}
Industry Area: ${formData.industryArea}
Monthly Salary: ${formData.monthlySalary}
Location: ${formData.location}
Employment Status: ${formData.employmentStatus}
Employment Type: ${formData.employmentType}
Positions: ${formData.positions}
Experience: ${formData.experience}
Gender: ${formData.gender}
Nationality: ${formData.nationality}
Job Details: ${formData.jobDetail}`
    );
  };

  return (
    <div className="form-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <h3 className="form-heading">Job Information</h3>

        {/* Job Title */}
        <div className="form-group">
          <input
            type="text"
            id="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleInputChange}
          required/>
        </div>

        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <select
              id="industryArea"
              value={formData.industryArea}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Industry Area
              </option>
              <option value="IT">IT</option>
              <option value="Account">Account</option>
              <option value="Marketing">Marketing</option>
              <option value="Manager">Manager</option>
              <option value="Banking">Banking</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="monthlySalary"
              value={formData.monthlySalary}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Monthly Salary
              </option>
              <option value="25000-30000">25000-30000</option>
              <option value="30000-45000">30000-45000</option>
              <option value="45000-80000">45000-80000</option>
              <option value="80000-100000">80000-100000</option>
              <option value="100000+">100000+</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <select
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Location
              </option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div className="form-group">
            <select
              id="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Employment Status
              </option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group">
            <select
              id="employmentType"
              value={formData.employmentType}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Employment Type
              </option>
              <option value="Permanent">Permanent</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="form-group">
            <select
              id="positions"
              value={formData.positions}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Positions
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <div className="form-group">
            <select
              id="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Experience
              </option>
              <option value="0-1">0-1 Year</option>
              <option value="1-3">1-3 Years</option>
              <option value="3+">3+ Years</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <select
              id="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              required>
              <option value="" disabled>
                Select Nationality
              </option>
              <option value="Indian">Indian</option>
              <option value="Non-Indian">Non-Indian</option>
            </select>
          </div>
        </div>

        {/* Additional Info */}
        <div className="form-group">
          <textarea
            id="jobDetail"
            rows="3"
            placeholder="Job Details"
            value={formData.jobDetail}
            onChange={handleInputChange}
            required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          POST JOB
        </button>
      </form>
    </div>
  );
};

export default PostJobForm;
