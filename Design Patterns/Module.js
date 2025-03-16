// Module Pattern
// Definition: A design pattern that allows encapsulating private and public members within a module, providing data privacy and avoiding polluting the global scope.
// Use-cases: Creating reusable libraries, managing state, and avoiding variable conflicts.

const CounterModule = (function () {
  let count = 0; // private

  // public methods
  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
})();

CounterModule.increment();
console.log(CounterModule.getCount());
CounterModule.decrement();
console.log(CounterModule.getCount());
