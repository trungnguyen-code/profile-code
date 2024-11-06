function dangnhap(){
    var sdt = document.getElementById("sodienthoai").value;
    var pass = document.getElementById("matkhau").value;
    

    if (sdt==="admin" && pass==="123"){
        alert('Đăng nhập thành công !');
            setTimeout(function(){
                window.location.href="trangchu.html";
            }, 500);
       
    } else {
        if (sdt=="" && pass ===""){
            alert('Vui lòng nhập đầy đủ thông tin');
            return true;
        }  else {
            alert('Đăng nhập sai số điện thoại hoặc mật khẩu');
            return true;
        }
    }           
}