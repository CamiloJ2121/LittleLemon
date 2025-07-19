import { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from '../../utils/api';

import './index.scss';

function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() => {
    if (date) {
      const parsedDate = new Date(date);
      // eslint-disable-next-line
      const times = fetchAPI(parsedDate);
      setAvailableTimes(times);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    // eslint-disable-next-line
    const success = submitAPI(formData);

    if (success) {
      alert("Reservation confirmed!");
      setDate("");
      setTime("");
      setGuests(1);
      setOccasion("Birthday");
    } else {
      alert("There was an error submitting your reservation.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reservation-form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split('T')[0]}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default ReservationForm;