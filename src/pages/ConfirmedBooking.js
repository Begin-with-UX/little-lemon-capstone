import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section
      className="confirmation-page"
      aria-labelledby="confirmed-heading"
    >
      <h1 id="confirmed-heading">Booking Confirmed!</h1>

      <p>Your reservation has been successfully submitted.</p>

      <button
        className="confirmation-button"
        aria-label="On Click"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </section>
  );
}

export default ConfirmedBooking;