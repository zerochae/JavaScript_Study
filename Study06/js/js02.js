function 함수2(...파라미터들){
    console.log(파라미터들)
}

함수2(1,2,3,4,5,6,7);

function 함수3(a,b, ...파라미터들){
    console.log(파라미터들)
}

함수3(1,2,3,4,5,6,7);

/* 이렇게 하면 에러 남 rest는 말그대로 나머지.. 끝부분에 사용한다 */

// function 함수4(a, ...파라미터들, b){
//     console.log(파라미터들)
// }

/* 2개 사용해도 에러 남 */

// function 함수5(a, ...파라미터들, ...파리머터들2){
//     console.log(파라미터들)
// }

function 함수6(...rest){
    for (let argument of arguments){
        console.log(argument)
    }
}

함수6(1,2,3,5)