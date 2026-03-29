import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm label", () => {
  render(
    <BookingForm
      availableTimes={["Select Time", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm"]}

      dispatch={jest.fn()}
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});