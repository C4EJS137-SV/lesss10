//1. Tạo 1 thẻ input:email#my-email.
// Hãy tạo listener khi giá trị của input thay đổi để kiểm tra định dạng của email nhập vào.
/*
const $emailInput = document.getElementById('my-email');
$emailInput.onchange = function () {
    let email = $emailInput.value;
    if (!valiEmail(email))
        alert('Nhập lại email')
};
function valiEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
*/

//2. Tạo 2 thẻ input:number#number-a, input:number#number-b và 2 nút “Cộng”, “Trừ”. Hãy tạo listener khi:
//Click vào nút “Cộng” → Cộng 2 số nhập vào từ 2 ô input. 
//Click nút “Trừ” → Trừ 2 số nhập vào từ 2 ô input.

const $numberA = document.getElementById('number-a');
const $numberB = document.getElementById('number-b');
const $plusBtn = document.getElementById('plus-btn');
const $subBtn = document.getElementById('sub-btn');
$plusBtn.onclick = function () {
    let a = Number($numberA.value);
    let b = Number($numberB.value);
    alert(a + b);
};

$subBtn.onclick = function () {
    let a = $numberA.value;
    let b = $numberB.value;
    alert(a - b);
};

// 3 
let $myImage = document.getElementById('my-img');
let $increaseBtn = document.getElementById('increase');
let $decreaseBtn = document.getElementById('decrease');
let $currentWidth = 100;
let $currentHeight = 100;

$increaseBtn.onclick = function () {
    $currentWidth += 10;
    $currentHeight += 10;
    $myImage.style.width = $currentWidth + 'px';
    $myImage.style.height = $currentHeight + 'px';
};

$decreaseBtn.onclick = function () {
    $currentWidth -= 10;
    $currentHeight -= 10;
    $myImage.style.width = $currentWidth + 'px';
    $myImage.style.height = $currentHeight + 'px';
};