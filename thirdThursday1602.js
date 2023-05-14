// Напишите функцию JavaScript, которая принимает на вход массив чисел и возвращает новый массив, содержащий элементы исходного массива в обратном порядке.

// Examples:

// input: [1, 2, 3, 4, 5] output: [5, 4, 3, 2, 1]

// input: [5, 4, 3, 2, 1] output: [1, 2, 3, 4, 5]

// input: [1, 2, 2, 3, 3, 3] output: [3, 3, 3, 2, 2, 1]
function reverseArray(arr) {
    return arr.reverse();
  }
  
  // Пример использования
  console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
  console.log(reverseArray([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
  console.log(reverseArray([1, 2, 2, 3, 3, 3])); // [3, 3, 3, 2, 2, 1]