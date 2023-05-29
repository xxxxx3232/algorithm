// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// solution 1
function solution(numbers) {
  return [
    ...new Set(
      numbers
        .map((fN, i) => {
          return numbers.filter((_, sI) => sI != i).reduce((acc, cur) => [...acc, fN + cur], []);
        })
        .flat()
    ),
  ].sort((a, b) => a - b);
}

// result
console.log(solution([2, 1, 3, 4, 1]));
// [2,1,3,4,1]	[2,3,4,5,6,7]
