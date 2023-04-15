// https://school.programmers.co.kr/learn/courses/30/lessons/120842

// solution 1
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i += n) answer.push(num_list.slice(i, i + n));

  return answer;
}

// solution 2
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n)); // splice는 자른 값을 리턴한다. 원본배열은 잘린 값을 제외한 나머지가 할당된다.
  }

  return answer;
}

// solution 3
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}

// result
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
