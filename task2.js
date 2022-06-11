document.getElementById("Primary1").style.backgroundColor = "#DBEAFE";
document.getElementById("Secondary1").style.backgroundColor = "#F3E8FF";
document.getElementById("Success1").style.backgroundColor = "#DCFCE7#DCFCE7";
document.getElementById("Danger1").style.backgroundColor = "#FEE2E2";
document.getElementById("Warning1").style.backgroundColor = "#FEF9C3";
document.getElementById("Info1").style.backgroundColor = "#E0E7FF";
document.getElementById("Light1").style.backgroundColor = "#F9FAFB";
document.getElementById("Dark1").style.backgroundColor = "#1F2937";

function delRowCell() {
    var table = document.getElementById("del");
    table.deleteRow(0);
    table.deleteRow(1);
    table.deleteRow(2);
    table.deleteRow(3);
    table.deleteRow(4);
}

function myFunction() {
    var table = document.getElementById("add");
    var row = table.childElementCount(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";

}