// Câu 31: Xóa giá trị đang chọn khỏi dropdown list bằng DOM
function removecolor() {
    var select = document.getElementById("colorSelect");
    if (select.options.length === 0) {
        window.alert("Danh sách đã trống!");
        return;
    }
    select.remove(select.selectedIndex);
}
