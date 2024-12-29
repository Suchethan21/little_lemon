import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    seating: 'standard'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="booking-container">
      <h2>Find a table for any occasion</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={bookingData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select time</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Diners</label>
          <select
            id="guests"
            name="guests"
            value={bookingData.guests}
            onChange={handleChange}
            required
          >
            <option value="">Select number of diners</option>
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={bookingData.occasion}
            onChange={handleChange}
          >
            <option value="">Select occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Seating options</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="seating"
                value="standard"
                checked={bookingData.seating === 'standard'}
                onChange={handleChange}
              />
              Standard
            </label>
            <label>
              <input
                type="radio"
                name="seating"
                value="outside"
                checked={bookingData.seating === 'outside'}
                onChange={handleChange}
              />
              Outside
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">Let's go</button>
      </form>
    </div>
  );
};

export default BookingForm;
