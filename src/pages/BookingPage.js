import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Book your table at Little Lemon.</p>
      <BookingForm />
    </section>
  );
}

export default BookingPage;