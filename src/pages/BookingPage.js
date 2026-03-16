import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Book your table at Little Lemon.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;