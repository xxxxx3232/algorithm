// https://school.programmers.co.kr/learn/courses/30/lessons/82612

// solution 1
function solution(price, money, count) {
  return money - price * ((count * (count + 1)) / 2) < 0 ? Math.abs(money - price * ((count * (count + 1)) / 2)) : 0;
}

// solution 2
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money; // 코드의 재사용
  return tmp > 0 ? tmp : 0;
}

// result
console.log(solution(3, 20, 4));
// 3	20	4	10
