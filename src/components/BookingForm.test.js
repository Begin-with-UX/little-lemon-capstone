import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("form can be submitted by the user", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const submitButton = screen.getByDisplayValue("Make Your reservation");
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalled();
});