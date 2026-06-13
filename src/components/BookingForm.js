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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {filteredTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {formatTime(availableTime)}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

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

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;