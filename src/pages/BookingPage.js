import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, setAvailableTimes }) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Book your table at Little Lemon.</p>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </section>
  );
}

export default BookingPage;