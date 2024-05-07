// Form.js
import React, { useState, useEffect } from 'react';
import '../styles/forms.css'; // Importing CSS file for styling
import CustomPopup from "./CustomPopup"; // Import your custom popup component

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    technology: '',
    primary_skill: '',
    secondary_skill: '',
    cv: '',
    country: '',
    message: '',
    linkedin_profile: ''
  });

  const [countries, setCountries] = useState([]); // Array to store country names

  // Function to fetch list of countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const sortedCountries = data.map(country => country.name.common).sort(); // Sort the countries alphabetically
        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries(); // Fetch countries when component mounts
  }, []);

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithFile = new FormData();
      // Append form data fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFile.append(key, value);
      });
      // Append resume file
      formDataWithFile.append('cv', e.target.cv.files[0]);

      const response = await fetch('https://hashtech.pythonanywhere.com/api/postresume/', {
        method: 'POST',
        body: formDataWithFile
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsPopupOpen(true); // Open the popup upon successful form submission
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="custom-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name*</label>
            <input type="text" name="firstname" id="firstName" value={formData.firstname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" name="lastname" id="lastName" value={formData.lastname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contactNo">Contact No*</label>
            <input type="tel" name="phone" id="contactNo" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="technology">Technology</label>
            <input type="text" name="technology" id="technology" value={formData.technology} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="primarySkill">Primary Skills</label>
            <input type="text" name="primary_skill" id="primarySkill" value={formData.primary_skill} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="secondarySkill">Secondary Skill</label>
            <input type="text" name="secondary_skill" id="secondarySkill" value={formData.secondary_skill} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume*</label>
            <input type="file" name="cv" id="resume" required />
          </div>
          <div className="form-group">
            <label htmlFor="countyOfResidence">County of Residence*</label>
            <select name="country" id="countyOfResidence" value={formData.country} onChange={handleChange} required>
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="linkedIn">LinkedIn Profile URL</label>
            <input type="url" name="linkedin_profile" id="linkedIn" value={formData.linkedin_profile} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Conditional rendering of the custom popup */}
      {isPopupOpen && (
        <CustomPopup
          isOpen={isPopupOpen}
          onClose={handleClose}
          message="Thanks! You will hear from us soon !"
        />
      )}
    </div>
  );
};

export default Form;
