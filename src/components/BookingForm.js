import { useState, useEffect } from "react";

const formatTime = (time) => {
  const [hour, minute] = time.split(":");
  let h = parseInt(hour, 10);

  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;

  if (h === 0) {
    h = 12;
  }

  return `${h}:${minute} ${ampm}`;
};

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const filteredTimes = availableTimes.filter((availableTime) => {
    const hour = parseInt(availableTime.split(":")[0], 10);
    return hour >= 11 && hour <= 22;
  });

  useEffect(() => {
    if (filteredTimes.length > 0) {
      setTime(filteredTimes[0]);
    }
  }, [filteredTimes]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const isFormValid =
  firstName.trim() !== "" &&
  lastName.trim() !== "" &&
  date !== "" &&
  date >= today &&
  time !== "" &&
  guests >= 1 &&
  guests <= 10;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const formData = {
      firstName,
      lastName,
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking form">
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="first-name">
            First Name<span>*</span>
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="last-name">
            Last Name<span>*</span>
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="res-date">
          Choose Date<span>*</span>
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={today}
          required
          onChange={handleDateChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">
          Choose Time<span>*</span>
        </label>
        <select
          id="res-time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
        >
          {filteredTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {formatTime(availableTime)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="guests">
          Number of Guests<span>*</span>
        </label>
        <input
          type="number"
          min="1"
          max="10"
          id="guests"
          value={guests}
          required
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select Occasion</option>
          <option value="None, Just Hungry">None, Just Hungry</option>
          <option value="Birthday">Birthday</option>
          <option value="First Date">First Date</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input
        className="booking-submit"
        type="submit"
        value="Create Reservation"
        aria-label="On Click"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;