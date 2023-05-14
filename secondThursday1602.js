// Напишите функцию JavaScript, которая принимает число n в качестве входных данных и возвращает n-е число Фибоначчи. Последовательность Фибоначчи — это ряд чисел, в котором каждое число является суммой двух предыдущих чисел, начиная с 0 и 1.

// Examples: 

// input: 0 output: 0 

// input: 1 output: 1 

// input: 5 output: 5

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5