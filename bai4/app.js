
const form = document.getElementById("signup");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const names = form.elements.names.value;
    const gender = form.elements.gender.value;
    const age = form.elements.age.value;
    const address = form.elements.address.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (!names ||!gender || !age || !address || !email || !password) {
        alert("Nhập đầy đủ thông tin");
    } else if (!sendEmail(email)) {
        alert("Email không hợp lệ");
    } else {
        alert("Đăng ký thành công");
        form.reset();
    }
});

function sendEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
