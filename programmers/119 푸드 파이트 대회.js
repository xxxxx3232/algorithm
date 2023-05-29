// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// solution 1
function solution(food) {
  let array = food.slice(1).map((n, i) => (n % 2 ? String(1 + i).repeat((n - 1) / 2) : String(1 + i).repeat(n / 2)));
  return array.concat([0]).slice().concat(array.reverse()).join("");
}

// solution 2
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2)); // 소숫점 버리기
  }

  return res + "0" + [...res].reverse().join(""); // 배열로 만들어, 반전
}

// result
console.log(solution([1, 3, 4, 6]));
// [1, 3, 4, 6]	"1223330333221"
