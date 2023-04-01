const $image = document.getElementById('my-img');
const $urlInput = document.getElementById('url');
const $widthInput = document.getElementById('width-btn');
const $heightInput = document.getElementById('height-btn');
const $borderInput = document.getElementById('border-btn');
const $altInput = document.getElementById('url-alt');


$urlInput.addEventListener('input', () => {
    $image.src = $urlInput.value;
});

$widthInput.addEventListener('input', () => {
    $image.width = $widthInput.value;
});

$heightInput.addEventListener('input', () => {
    $image.height = $heightInput.value;
});

$borderInput.addEventListener('input', () => {
    $image.style.borderRadius = `${$borderInput.value}px`;
});

$altInput.addEventListener('input', () => {
    $image.alt = $altInput.value;
});

