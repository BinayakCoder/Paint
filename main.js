var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var color = "red";
var width = 3;
var radii = 20;
var mouseEvent = "";
canvas.addEventListener("mousedown", md);
function md(e) {
    mouseEvent  = "mousedown";
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radii = document.getElementById("radii").value;
}
canvas.addEventListener("mouseup", mu);
function mu(e) {
    mouseEvent  = "mouseup";
}
canvas.addEventListener("mouseleave", ml);
function ml(e) {
    mouseEvent  = "mouseleave";
}

canvas.addEventListener("mousemove", mm);
function mm(e) {
    var cx = e.clientX - canvas.offsetLeft;
    var cy = e.clientY - canvas.offsetTop;
    if (mouseEvent === "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width ;
        ctx.arc(cx, cy, radii, 0, 2* Math.PI);
        ctx.stroke();
    }
}