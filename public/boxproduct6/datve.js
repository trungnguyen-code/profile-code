function thanhtoan(){
    var datgheso = document.getElementById("datgheso").value;

    if (datgheso ==""){
           alert("Vui lòng chọn số ghế cần đặt!");
    } else if (datgheso=="1" || datgheso=="2" || datgheso=="3" || datgheso=="4" || datgheso=="5" || datgheso=="8" || datgheso=="9" || datgheso=="10" ||
        datgheso=="11" || datgheso=="14" || datgheso=="15" || datgheso=="16") {
            alert ('Vui lòng mời bạn đặt ghế số khác vì đã có người chọn ! ');
            alert('Gợi ý: Bạn đặt những ghế số màu đen đậm!')
        } else if (datgheso=="6" || datgheso=="7" || datgheso=="12" || datgheso=="13" ||  datgheso=="17" ){
                alert('Chúc mừng bạn đã đặt vé xe thành công!');
                setTimeout(function(){
                    window.location.href="thanhtoan.html";
                }, 500);
            } else  
                alert('Không có số ghế trên! Mời bạn chọn số ghế cho phù hợp ở vị trí!');
            }