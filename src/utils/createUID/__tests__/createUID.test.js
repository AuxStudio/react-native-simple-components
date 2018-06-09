import createUID from '../';

it('creates a UID', () => {
  const UID1 = createUID();
  const UID2 = createUID();

  expect(UID1).not.toBeNull();
  expect(UID1).not.toBe(UID2);
});
