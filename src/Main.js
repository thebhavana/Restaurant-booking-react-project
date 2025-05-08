import React, { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import './BookingForm.css';

// Simulated API fetch
const fetchAPI = (date) => {
  // Generate dummy available times based on date
  const hours = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  return date ? hours : [];
};

const submitAPI = (formData) => {
  console.log('Form Submitted:', formData);
  return true; // Simulate successful submission
};

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, fetchAPI(new Date()));

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      alert('Booking Successful!');
    } else {
      alert('Booking Failed!');
    }
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={updateTimes}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;
