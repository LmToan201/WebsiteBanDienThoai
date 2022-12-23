var CORRECT_USER ='leminhtoan';
var CORRECT_PASS ='leminhtoan';

var inputUsername = document.getElementById('taikhoanName');
var inputPassword = document.getElementById('matkhau');

var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);
} else{
    formLogin.addventListener('submit', onFormSubmit);
}

function onFormSubmit(e){
    var taikhoanName = inputUsername.value;
    var matkhau = inputPassword.value;

    if(taikhoanName == CORRECT_USER && matkhau == CORRECT_PASS){
        alert('Bạn đã đăng nhập thành công!');
    }else{
        alert('Tài khoản hoặc mật khẩu không chính xác!')
    }
}