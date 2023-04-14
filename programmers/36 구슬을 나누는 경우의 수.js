// 문제 설명
// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ balls ≤ 30
// 1 ≤ share ≤ 30
// 구슬을 고르는 순서는 고려하지 않습니다.
// share ≤ balls

// 입출력 예
// balls	share	result
// 3	2	3
// 5	3	10

// 입출력 예 설명
// 입출력 예 #1
// 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.

// 입출력 예 #2
// 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.

// 풀이1
const solution = (balls, share) => {
  const factorial = (n) => {
    let num = 1;
    for (let i = 1; i <= n; i++) num *= i;
    return num;
  };

  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
  /**
   * Math.round를 사용하는 이유는?
   * 집합의 경우, 가능한 조합의 수는 정수로 나와야 합니다. 그러나 경우의 수 공식에서 소수가 나오는 경우가 있습니다. 이는 주로 조합에서의 중복을 처리하기 위해 나눗셈을 수행하는 경우입니다.
   * 조합에서 중복을 제거하는 과정에서 나눗셈을 수행하면, 나누는 수와 나누는 수의 차이가 1 이하인 경우가 있을 수 있습니다.
   * 이 때, 나누는 수와 나누어지는 수 모두 정수이지만, 나눈 결과가 소수가 되어버리는 경우가 있습니다.
   *
   * 소수점 오류, 부동 소수점이란?
   * 소수점이 있는 경우 2진법으로 표현하는 과정에서 무한대로 진행되는 경우가 있다. 이 경우엔 IEEE방식의 부동 소수점 표현방식을 사용하는데, 이 표현방식에도 오차가 있다.
   */
};

// 풀이2
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share));
}

// 풀이3
function solution(balls, share) {
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) / Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
    // 콜백함수에서 해당 위치의 인자값(코드에서 첫번째 인자는 Value, 두번째 인자는 Index)을 사용하지 않을 때 '_' 로 네이밍 한다.
  );
}
