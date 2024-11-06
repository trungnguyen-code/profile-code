function quenmatkhau2(){
    var otp = document.getElementById("otp").value;
    var passnew = document.getElementById("passnew").value;

    if(otp=="" && passnew==""){
              alert("Vui lòng nhập đầy đủ thông tin");
    } else {
        if(otp == ""){
            alert("Vui lòng nhập mã otp ");
        } else {
            if(passnew== ""){
            alert("Vui lòng nhập mật khẩu mới");
        }
    }
}
}