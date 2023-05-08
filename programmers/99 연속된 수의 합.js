// https://school.programmers.co.kr/learn/courses/30/lessons/120923

// solution 1
function solution(num, total) {
  let n = -100;

  while (n++ <= total) {
    let m = n + num - 1;
    if (((m + n) * (m - n + 1)) / 2 == total) return new Array(num).fill(0).map((_, i) => n + i); // 가우스 공식 [n(n+1)/2] 1부터 n까지 합계산
  }
}

// solution 2
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2)); // total/num => 수열의 평균값 num/2 => 수열의 마지막에서 중앙까지의 등차 계산, ceil과 floor를 활용할 수 있는 이유는 등차가 1이기때문이다.
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}

// solution 3
function solution(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2; // 가우스 공식 응용
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}

// result
console.log(solution(3, 0)); // [-1, 0, 1]
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]
