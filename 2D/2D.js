let timer;
let ctx;
let canvas;
let X;
let Y;
let angle = 0;
let speed = 0;
let acceleration = 0;
let Gy;
let Vy;
let Vx;
let hight;
let sin90;
let dt;
let angleRad;
function draw(){
canvas = document.getElementById('myCanvas');

     ctx = canvas.getContext("2d");

     ctx.beginPath();
     ctx.moveTo(200 , 1)
     ctx.lineTo(200,600 );
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(400 ,1);
     ctx.lineTo(400 , 600);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(600 ,1);
     ctx.lineTo(600 , 600);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(1 ,200);
     ctx.lineTo(800 , 200);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(1 ,400);
     ctx.lineTo(800 , 400);
     ctx.stroke()
};
draw()




function clicked(){



    speed =Number(document.getElementById("iS").value);
    angle = Number(document.getElementById("angle").value);
    hight = Number(document.getElementById("H").value);
    
    console.log(speed , angle , hight);
     angleRad = angle * Math.PI / 180;
     Vx = speed * Math.cos(angleRad);
     Vy = speed * Math.sin(angleRad);
     sin90 = Math.sin(90 * Math.PI / 180);
  
   

    X = 0;

    Y = hight;
    dt = 0.016
    timer = setInterval(() => {

        Vx = Vx + acceleration * dt;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;
         Gy = 600 -  Y
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(X, Gy, 5, 0, Math.PI * 2);
        ctx.fill();
    



        if (Y >= 0) {

        document.getElementById("xx").innerHTML = Math.round(X);
        document.getElementById("yy").innerHTML = Math.round(Y);

        }
        if (Y === 0 || Y < 0) {
            clearInterval(timer);
            document.getElementById("yy").innerHTML = 0;
        }






},16);

   
}
function reset(){
    clearInterval(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("xx").innerHTML = 0;
    document.getElementById("yy").innerHTML = 0;
    document.getElementById("iS").value = NaN;
    document.getElementById("H").value = NaN;
    document.getElementById("angle").value = NaN;

    X = 0;
    Y = 0;
    draw();
}