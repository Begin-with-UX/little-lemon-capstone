import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

export const initializeTimes = () => {
  return window.fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  return window.fetchAPI(new Date(action.date));
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      navigate("/confirmed-booking");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;