function sum(a) {
  // eslint-disable-next-line no-debugger
  debugger;
  // eslint-disable-next-line func-names
  return function (b) {
    return a + b;
  };
}

// eslint-disable-next-line no-console
console.log(sum(5)(2));

// eslint-disable-next-line no-undef
test('adds 5 + 2 to equal 7', () => {
  // eslint-disable-next-line no-undef
  expect(sum(5)(2)).toBe(7);
});
