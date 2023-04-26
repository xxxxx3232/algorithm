// https://school.programmers.co.kr/learn/courses/30/lessons/120868

// solution 1
function solution(sides) {
  let [min, max] = sides.sort((a, b) => a - b);
  let cnt = 0;

  for (let i = 1; i < max + min; i++) {
    max < min + i && i <= max && cnt++;
    max < i && i < max + min && cnt++;
  }

  return cnt;
}

// solution 2
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
// sides = [a,b] 이고(a>b라고 가정, 이는 sort해주면됩니다.) 새로 주어지는 변의 길이를 c라고 했을 때, a가 가장 긴변인 경우 즉 a > c인 경우 b + c > a > c 이므로 a > c > a-b 이기 때문에 c의 정수 갯수는 b-1개입니다.
// c가 가장 긴변인 경우도 이런식으로 하면 되고 a=c 인경우 한가지 이므로 2b-1이 나옵니다.

// result
console.log(solution([11, 7])); // 13
