import { hola } from '../functions';


beforeEach(() => {
  // Spying on console.log function
  //spyOn(console, 'log');
});

test('Prints hola in the console', () => {
  const result = hola();

  expect(result).toBe('Hola');
});