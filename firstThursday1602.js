// Решить задачи и прикрепить ссылку на решение 

 

// Напишите функцию JavaScript, которая принимает на вход массив целых чисел и возвращает наибольший непрерывный возрастающий подмассив.
// Examples:

// input: [1, 2, 3, 4, 5] output: [1, 2, 3, 4, 5]

// input: [5, 4, 3, 2, 1] output: [1]

// input: [1, 2, 2, 3, 3, 3] output: [1, 2]

function findMaxSubarray(arr) {
  let start = 0;
  let end = 0;
  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      end = i;
    } else {
      if (end - start > maxEnd - maxStart) {
        maxStart = start;
        maxEnd = end;
      }
      start = i;
      end = i;
    }
  }

  if (end - start > maxEnd - maxStart) {
    maxStart = start;
    maxEnd = end;
  }

  return arr.slice(maxStart, maxEnd + 1);
}

console.log(findMaxSubarray([1, 2, 3, 4, 5]));