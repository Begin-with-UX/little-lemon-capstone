import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <div className="booking-container">
       <h1 id="booking-heading">Reserve a Table</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;