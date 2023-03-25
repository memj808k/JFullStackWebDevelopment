import {resta} from '../resta';

test('subt 1 - 2 to equal -1', () => {
  expect(resta(1, 2)).toBe(-1);
  expect(resta(2, 1)).toBe(1);
  expect(resta(2, 2)).toBe(0);
});