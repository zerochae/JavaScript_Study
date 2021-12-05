// Primitive data type 자료 자체가 변수에 저장 됨. 문자 , 숫자 등

var name = 'john'
var age = 20;

// Reference data Type 자료를 변수가 아닌 화살표(레퍼런스)에 저장. Array, Object 등

var 사람 = {name : 'Kim'};

var 이름1 = '김'
var 이름2 = 이름1
이름1 = '박'

var 이름3 = {name : '김'};
var 이름4 = 이름3;

이름3.name = '박'

console.log(이름1)
console.log(이름2)
console.log(이름3)
console.log(이름4)

var 이름1 = { name : '김'}

function 변경(obj){
    obj = {name : 'park'}
}

변경(이름1);

console.log(이름1)

function 변경2(obj){
    obj.name = 'park'
}

변경(이름1)

console.log(이름1)

var tempArr = [1,2,3]

var copyArr = [...tempArr]

console.log(copyArr)