// https://school.programmers.co.kr/learn/courses/30/lessons/120871

// solution 1
const solution = (n) =>
  Array(200)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((j) => j % 3 != 0 && !Array.from(String(j), Number).includes(3))[n - 1];

// solution 2
function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num) if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num); // 1 대 1 대응이기 때문에 arr.length !== n 일때 while을 종료할 수 있다.
  return arr.pop(); // 배열의 마지막 원소를 반환
}

// result
console.log(solution(15)); // 25
