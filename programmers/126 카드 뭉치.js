// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// solution 1
function solution(cards1, cards2, goal) {
  return goal.every((msg) => {
    if (cards1[0] == msg) {
      cards1.splice(0, 1);
      return true;
    } else if (cards2[0] == msg) {
      cards2.splice(0, 1);
      return true;
    } else {
      return false;
    }
  })
    ? "Yes"
    : "No";
}

// result
console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "drink", "water"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"Yes"
