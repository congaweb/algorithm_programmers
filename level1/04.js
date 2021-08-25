/*
핸드폰 번호 가리기
문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.

입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	    "*****8888"
*/

// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    let answer = '';
    let phoneNumber = phone_number.split('');
    let stack = [];
    let n = phoneNumber.length;

    for (let i = 0; i < n; i++) {
        if (phoneNumber.length > 4) {
            phoneNumber.shift();
            stack.push("*");
        } else {
            stack.push(phoneNumber.shift());
        }
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("01033334444"));