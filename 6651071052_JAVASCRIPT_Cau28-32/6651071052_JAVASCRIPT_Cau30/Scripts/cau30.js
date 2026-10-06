// Câu 30: Thêm một hàng vào table đã tồn tại bằng DOM
function insert_Row() {
    var table = document.getElementById("sampleTable");
    var n = table.rows.length + 1;                 // số thứ tự hàng mới
    var row = table.insertRow(table.rows.length);  // chèn vào cuối bảng
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Row" + n + " cell1";
    cell2.innerHTML = "Row" + n + " cell2";
}
