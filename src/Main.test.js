import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct initial times", () => {
  const expectedTimes = ["Select Time", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm"];

  const result = initializeTimes();

  expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the same value provided in the state", () => {
  const state = ["Select Time", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm"];

  const action = { type: "UPDATE_TIMES", date: "2026-03-17" };

  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});