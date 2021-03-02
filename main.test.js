function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));
test('adds 5 + 2 to equal 7', () => {
  expect(sum(5)(2)).toBe(7);
});
