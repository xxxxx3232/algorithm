// https://school.programmers.co.kr/learn/courses/30/lessons/120910

// solution 1
const solution = (n, t) =>
  Array(t)
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((acc) => {
      return acc * 2;
    }, n);

// solution 2
function solution(n, t) {
  return n << t;
}
// <<는 JavaScript에서 비트 시프트 연산자(bitwise shift operator) 중 하나로, 왼쪽으로 비트를 이동시키는 연산을 수행합니다. x << y는 x를 y비트만큼 왼쪽으로 이동시키는 것을 의미합니다.
// 따라서 이 함수는 n을 2의 t승으로 비트 시프트한 값을 반환하므로, 예를 들어 solution(2, 3)을 호출하면 2 << 3 = 16이 반환됩니다. 이는 2를 2진수로 나타낸 후 왼쪽으로 3비트만큼 이동한 결과와 같습니다.

// solution 3
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

// solution 4
function solution(n, t) {
  return n * Math.pow(2, t); // Math.pow()는 거듭제곱한 값을 반환한다. 2**t
}
// math.pow() 함수는 제곱 연산을 간편하게 수행할 수 있도록 도와주는 유용한 함수입니다. 하지만 ES7부터 도입된 지수 연산자(**)를 사용하는 것이 더욱 간결하고 가독성이 좋습니다.

// solution 5
function solution(n, t) {
  return n * 2 ** t;
}
// 이 함수에서 사용된 **는 JavaScript에서 지수 연산자(exponentiation operator)를 나타냅니다. 즉, x ** y는 x의 y승을 나타냅니다.
// 따라서 이 함수는 n에 2의 t승을 곱한 값을 반환하므로, 예를 들어 solution(2, 3)을 호출하면 2 * 2 ** 3 = 2 * 8 = 16이 반환됩니다.

// result
console.log(solution(2, 10)); // 2048
