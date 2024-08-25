import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    try {
      const response = await fetch(
        "https://aspire-nex-task1-portfoliobackend-pw1qolzqp.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setLoading(false);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
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
          <button
            type="submit"
            className="ContactButton"
            disabled={loading || submitted}
          >
            {loading ? "Submitting..." : submitted ? "Submitted" : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactPage;
