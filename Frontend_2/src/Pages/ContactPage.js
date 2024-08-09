import React, { useState } from 'react';
// import './App.css'; // Assuming your CSS file is named App.css

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('https://aspire-nex-task1-portfoliobackend-pw1qolzqp.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="ContactPage">
      <div className="ContactFormContainer">
        <h2 className="ContactHeading">Contact Us</h2>
        <form className="ContactForm" onSubmit={handleSubmit}>
          <label className="ContactLabel">
            Name:
            <input
              type="text"
              name="name"
              className="ContactInput"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="ContactLabel">
            Email:
            <input
              type="email"
              name="email"
              className="ContactInput"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="ContactLabel">
            Message:
            <textarea
              name="message"
              className="ContactTextarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="ContactButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
