// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// solution 1
function solution(number, limit, power) {
  let knight = Array.from({ length: number }, (_, i) => i + 1);

  return knight.reduce((acc, cur) => {
    let iron = 0;

    knight.slice(0, Math.sqrt(cur)).forEach((n) => !(cur % n) && iron++);
    Number.isInteger(Math.sqrt(cur)) ? (iron = (iron - 1) * 2 + 1) : (iron = iron * 2);
    return acc + (iron > limit ? power : iron);
  }, 0);
}

// solution 2
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

// result
console.log(solution(10, 3, 2));
// 5	3	2	10
