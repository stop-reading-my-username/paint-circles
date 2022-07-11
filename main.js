var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color-picker").value;
    width_of_line=document.getElementById("width-picker").value;
    mouseEvent="mouseDown"
}
canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
    mouseEvent="mouseLeave"
 }
 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
    mouseEvent="mouseUP"
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
   cpx= e.clientX-canvas.offsetLeft
   cpy=e.clientY-canvas.offsetTop
   if (mouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=4;
      ctx.arc(cpx,cpy, 40,0,2*Math.PI);
      ctx.stroke();   
   }

   last_position_of_x=cpx
   last_position_of_y=cpy
 }
 function clear_area(){
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
 }
  