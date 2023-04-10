// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.

// 입출력 예
// my_string	n	result
// "hello"	3	"hhheeellllllooo"

// 입출력 예 설명
// 입출력 예 #1
// "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.

// 풀이1
function solution(my_string, n) {
  var answer = "";

  for (let i of my_string) {
    answer += i.repeat(n);
  }
  return answer;
}

// 풀이2
const solution = (my_string, n) => [...my_string].map((i) => i.repeat(n)).join("");
