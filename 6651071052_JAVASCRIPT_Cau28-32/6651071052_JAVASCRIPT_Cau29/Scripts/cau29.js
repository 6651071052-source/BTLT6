// Câu 29: Lấy Họ và tên từ hai input của form bằng DOM
function getFormvalue() {
    var form = document.getElementById("form1");
    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;
    var fullName = fname + " " + lname;

    window.alert("Họ và tên: " + fullName);
    document.getElementById("result").innerHTML = "Họ và tên: <b>" + fullName + "</b>";
    console.log(fullName);

    return false; // Ngăn form submit làm tải lại trang
}
