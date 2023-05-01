// https://school.programmers.co.kr/learn/courses/30/lessons/120880

// solution 1
const solution = (numlist, n) =>
  numlist
    .map((numbers) => numbers - n)
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(a) - Math.abs(b))
    .map((num) => num + n);

// solution 2
function solution(numlist, n) {
  // solution 1의 축약이다.
  // sort함수는 음수를 반환하면 a가 먼저, 양수면 b가 먼저 순서가 재배치 된다.
  // b랑 a의 거리가 같은 상황 즉, Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 '||' 연산자 뒤가 실행되면서 같은 거리일 경우 큰 수를 먼저 나오도록 한다.
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// result
console.log(solution([6, 4, 3, 2, 7, 8], 5)); // [6, 4, 7, 3, 8, 2]
