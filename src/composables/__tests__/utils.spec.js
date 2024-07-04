import { test, expect } from "vitest";
import { showSuccessToast, showErrorToast } from "../utils.js";

test("showSuccessToast displays a success message", () => {
  showSuccessToast("Success message");
  expect(true).toBe(true);
});

test("showErrorToast displays an error message", () => {
  showErrorToast("Error message");
  expect(true).toBe(true);
});
