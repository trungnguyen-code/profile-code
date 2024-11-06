function dangki(){
    var hovaten = document.getElementById("hovaten").value;
    var sodienthoai = document.getElementById("sodienthoai").value;
    var email = document.getElementById("email").value;
    var matkhau = document.getElementById("matkhau").value;
    if(hovaten==="" || sodienthoai==="" || email==="" || matkhau===""){
               alert("Vui lòng nhập đầy đủ thông tin");
       } else {
            alert("Bạn đăng kí thành công");
            setTimeout(function(){
                    window.location.href="dangnhap.html";
                }, 1000);
        }
    }
            