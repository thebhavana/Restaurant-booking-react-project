// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  
    // Reset form values
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
    });
  };
  





  return (
    <div className="form-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Name
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Date
          <input type="date" name="date" required value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Time
          <input type="time" name="time" required value={formData.time} onChange={handleChange} />
        </label>
        <label>
          Number of Guests
          <input type="number" name="guests" min="1" max="20" required value={formData.guests} onChange={handleChange} />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
