// https://school.programmers.co.kr/learn/courses/30/lessons/120845

// solution 1
function solution(box, n) {
  var answer = 1;

  box.forEach((b) => {
    answer *= ~~(b / n);
  });

  return answer;
}

// solution 2
function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1); // 중첩되는 계산은 reduce를 활용하자
}

// solution 3
function solution(box, n) {
  let [width, length, height] = box; // 구조분해로 가독성을 높인다.

  return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

// result
console.log(solution([10, 8, 6], 3)); // 12
