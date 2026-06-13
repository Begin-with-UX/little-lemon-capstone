import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

test("initializeTimes returns available times from the API", () => {
  const result = initializeTimes();

  expect(window.fetchAPI).toHaveBeenCalled();
  expect(result.length).toBeGreaterThan(0);
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns available times for the selected date from the API", () => {
  const state = [];
  const action = { type: "UPDATE_TIMES", date: "2026-03-17" };

  const result = updateTimes(state, action);

  expect(window.fetchAPI).toHaveBeenCalledWith(new Date("2026-03-17"));
  expect(result.length).toBeGreaterThan(0);
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});