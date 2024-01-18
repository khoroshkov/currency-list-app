import { validateString } from '../validateString';

const testData = [
  { input: undefined, output: false },
  { input: '1', output: false },
  { input: '0', output: false },
  { input: '!', output: false },
  { input: '*', output: false },
  { input: '-', output: false },
  { input: 'Ft5', output: false },
  { input: 'a', output: true },
  { input: 'X', output: true },
  { input: 'GaT', output: true }
];

describe('validateString', () => {
  testData.forEach((value) => {
    const result: boolean = validateString(value.input);

    it('Result value should match output value from testData', () => {
      expect(result).toEqual(value.output);
    });
  });
});
