$(document).ready(function () {
    var i = 1;
    $("#btn2").click(function () {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);



    function kiemTraSoAo() {
        let mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return true;
        } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("Từ 1 đến 100");
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);

    function kiemTraClb() {
        var kt=/^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})(\s{1}[0-9]+)$/;
        if($("#Clb").val()==""){
            $("#tbClb").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#Clb").val())){
            $("#tbClb").html("Dùng chữ hoa đầu từ và số  ");
            return false;
        }
        $("#tbClb").html("*");
        return true;
    }
    $("#Clb").blur(kiemTraClb);

    function kiemTraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);


    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);



    $("#Save").click(function () {
        if (
            kiemTraTen() == true &&
            kiemTraSoAo() == true &&
            kiemTraSDT() == true &&
            kiemTraNTT() == true
        ) {
            row = "<tr>";
            row += "<th>" + i++ + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    });
});
