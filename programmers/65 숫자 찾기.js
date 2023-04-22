// https://school.programmers.co.kr/learn/courses/30/lessons/120904

// solution 1
function solution(num, k) {
  return String(num).includes(k) ? String(num).indexOf(k) + 1 : -1;
}

// solution 2
function solution(num, k) {
  let ind = ("" + num).indexOf(k); // "" + num 숫자를 문자열로 변환
  return ind === -1 ? -1 : ind + 1;
}

// solution 3
function solution(num, k) {
  return (
    num
      .toString() // toString() 숫자를 문자열로 변환
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

// result
console.log(solution(29183, 9)); // 3
