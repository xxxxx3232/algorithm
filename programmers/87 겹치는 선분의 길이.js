// https://school.programmers.co.kr/learn/courses/30/lessons/120876

// solution 1
function solution(lines) {
  var answer = 0;

  for (let i = -100; i <= 100; i++) {
    let cnt = 0;
    if (i >= lines[0][0] && i < lines[0][1]) cnt++;
    if (i >= lines[1][0] && i < lines[1][1]) cnt++;
    if (i >= lines[2][0] && i < lines[2][1]) cnt++;
    if (cnt > 1) answer++;
  }

  return answer;
}

// solution 2
function solution(lines) {
  let line = new Array(200).fill(0); // 200개의 배열을 0으로 채운다.

  lines.forEach(([a, b]) => {
    // 각 배열을 구조분해
    for (; a < b; a++) line[a + 100]++; // 각 배열만큼 반복하며 line에 1씩 추가
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0); // line에서 1초과인 경우의 갯수
}

// solution 3
function solution(lines) {
  let min = Math.min(...lines.flat()); // flat()은 모든 배열을 하나로 평탄화한다.
  let max = Math.max(...lines.flat());
  let arr = Array(max - min + 1).fill(0); // lines 배열의 최소값과 최대값으로 새로운 배열을 생성해 0으로 채운다.

  for (let line of lines) {
    line.sort((a, b) => a - b);

    if (min < 0) {
      line[0] += Math.abs(min); // 전체 배열의 최소값이 음수일때, 모든 배열에 최소값을 양수로 바꾸어 더한다.
      line[1] += Math.abs(min); // 그 이유는 arr의 index가 0을 포함한 자연수이기 때문이다.
    }

    for (let i = line[0]; i < line[1]; i++) arr[i]++; // 각 배열(선)의 길이만큼 반복하여 arr에 1로 표시한다.
  }

  return arr.filter((v) => v > 1).length; // arr에 2이상인 원소는 선이 중첩된다는 뜻으로 그 값을 반환한다.
}

// result
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); // 0
