import assert from "node:assert";
import test from "node:test";

// Import the function to test
import { getRandomNumber } from "./script.js";

// Test case 1: Check if the generated number is within the specified range
test("Test getRandomNumber", () => {
  const min = 1;
  const max = 10;
  const randomNumber = getRandomNumber(min, max);
  assert.ok(randomNumber >= min && randomNumber <= max);
});
