// https://school.programmers.co.kr/learn/courses/30/lessons/120921

// solution 1
function solution(A, B) {
  let cnt = 0;
  let myArray = A.split("");

  if (myArray.join("") == B) return 0;

  while (cnt++ <= A.length) {
    myArray.unshift(myArray.pop());

    if (myArray.join("") == B) {
      return cnt;
    } else if (cnt == A.length) {
      return -1;
    }
  }
}

// solution 2
let solution = (a, b) => (b + b).indexOf(a); // b를 두개 이어붙이고, 그 안에서 a의 인덱스를 찾아 반환한다.

// solution 3
function solution(A, B) {
  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1); // slice를 통해 문자를 빼거나 넣을 수 있다.
    if (A === B) return i + 1;
  }

  return -1;
}

// result
console.log(solution("hello", "ohell")); // 1
console.log(solution("apple", "elppa")); // -1
console.log(solution("atat", "tata")); // 1
console.log(solution("abc", "abc")); // 0
console.log(solution("abc", "bca")); // 2
// "hello"	"ohell"	1
// "apple"	"elppa"	-1
// "atat"	"tata"	1
// "abc"	"abc"	0
