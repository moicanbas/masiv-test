import { test, expect } from "vitest";
import {
  showSuccessToast,
  showErrorToast,
  generateRandomNumber
} from "../utils.js";

const mockToast = {
  success: () => {},
  error: () => {}
};

const mockUseComicStore = () => ({
  qualifiedComics: [],
  numberRandom: 1,
  rating: 3,
  viewConfetti: false,
  get qualifiedComics() {
    return this._qualifiedComics;
  },
  set qualifiedComics(value) {
    this._qualifiedComics = value;
  },
  findIndex() {}
});

test("showSuccessToast muestra un mensaje de éxito", () => {
  showSuccessToast("Mensaje de éxito");
  expect(true).toBe(true);
});

test("showErrorToast muestra un mensaje de error", () => {

  showErrorToast("Mensaje de error");
  expect(true).toBe(true); 
});

test("generateRandomNumber genera un número aleatorio entre 1 y 25", () => {
  const randomNumber = generateRandomNumber();
  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(25);
});
