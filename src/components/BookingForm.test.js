import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const setup = () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={["11:00", "12:00", "17:00", "18:00"]}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  return { mockDispatch, mockSubmitForm };
};

test("first name input has required validation", () => {
  setup();

  const firstNameInput = screen.getByLabelText(/first name/i);

  expect(firstNameInput).toHaveAttribute("type", "text");
  expect(firstNameInput).toHaveAttribute("required");
});

test("last name input has required validation", () => {
  setup();

  const lastNameInput = screen.getByLabelText(/last name/i);

  expect(lastNameInput).toHaveAttribute("type", "text");
  expect(lastNameInput).toHaveAttribute("required");
});

test("date input has correct validation attributes", () => {
  setup();

  const dateInput = screen.getByLabelText(/choose date/i);

  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("min");
});

test("time select has required validation", () => {
  setup();

  const timeSelect = screen.getByLabelText(/choose time/i);

  expect(timeSelect).toHaveAttribute("required");
});

test("guests input has correct validation attributes", () => {
  setup();

  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("required");
});

test("occasion select exists", () => {
  setup();

  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(occasionSelect).toBeInTheDocument();
});

test("submit button is disabled when form is invalid", () => {
  setup();

  const submitButton = screen.getByDisplayValue(/create reservation/i);

  expect(submitButton).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
  setup();

  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: "Tony" },
  });

  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "Begin" },
  });

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-12-31" },
  });

  const submitButton = screen.getByDisplayValue(/create reservation/i);

  expect(submitButton).not.toBeDisabled();
});

test("form submits when all required fields are valid", () => {
  const { mockSubmitForm } = setup();

  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: "Tony" },
  });

  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "Begin" },
  });

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-12-31" },
  });

  const submitButton = screen.getByDisplayValue(/create reservation/i);

  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalled();
});