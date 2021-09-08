/*
시저 암호
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.

s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	n	result
"AB"	1	"BC"
"z"	1	"a"
"a B z"	4	"e F d"
*/

// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12926

// 대문자 65~90
// 소문자 97~122
function solution(s, n) {
    let answer = '';
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += " ";
            continue;
        }
        if (s[i] === s[i].toLowerCase() && s[i].charCodeAt() + n > 'z'.charCodeAt()) {
            count = (s[i].charCodeAt() + n) - 'z'.charCodeAt();
            answer += String.fromCharCode('a'.charCodeAt() + count - 1);
        } else if (s[i] === s[i].toUpperCase() && s[i].charCodeAt() + n > 'Z'.charCodeAt()) {
            count = (s[i].charCodeAt() + n) - 'Z'.charCodeAt();
            answer += String.fromCharCode('A'.charCodeAt() + count - 1);
        } else {
            answer += String.fromCharCode(s[i].charCodeAt() + n);
        }
    }
    return answer;
}

console.log(solution("AB", 1))
console.log(solution("z", 1))
console.log(solution("a B z", 4))