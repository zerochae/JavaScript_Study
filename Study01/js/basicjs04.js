function on(){
    document.getElementById('alert').style.display = 'block';
    document.getElementById('title').innerHTML = "아이디를 입력하셈";
}
function off(){
    document.getElementById('alert').style.display = 'none';
}

function idAlert(){
    alert('아이디를 입력하셈')
}

function pw(){
    alert('비번 입력하셈')
}

function alert(x){
    alert(x+'를 입력하셈')
}

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('alert').style.display = 'none';
});