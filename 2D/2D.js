let timer;
let ctx;
let canvas;
let X;
let Y;
let Mx;
let My;
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
let trajectory = [ ]
let scaleX;
let scaleY;
let Ix;
let Iy;
let scale;


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

    draw() 
    clearInterval(timer);
    speed =Number(document.getElementById("iS").value);
    angle = Number(document.getElementById("angle").value);
    hight = Number(document.getElementById("H").value);
    
    console.log(speed , angle , hight);
     angleRad = angle * Math.PI / 180;
     Vx = speed * Math.cos(angleRad);
     Ix = speed * Math.cos(angleRad);
     Vy = speed * Math.sin(angleRad);
     Iy = speed * Math.sin(angleRad);
     dt = 0.36
     X = 0;

     Y = hight + 1;
    for(; Y > 0;){

        Vx = Vx ;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;
        Mx = X;
                
    };

    X = 0;
    Y = hight;
          angleRad = angle * Math.PI / 180;
     Vx = speed * Math.cos(angleRad);
     Ix = speed * Math.cos(angleRad);
     Vy = speed * Math.sin(angleRad);
     Iy = speed * Math.sin(angleRad);
    My = (speed * Math.sin(angleRad)) ** 2 / (2 * 9.81);
    console.log(Mx , My);

    screenX = 800 / (Mx + 50);
    screenY = 600 / (My + hight + 50);
    scale = Math.min(screenX, screenY);

    
    timer = setInterval(() => {


        Vx = Vx + acceleration * dt;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;
         Gy = 600 - (Y * scale);
        

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(X * scale, Gy , 5 , 0, Math.PI * 2);
        ctx.fill();
    



        if (Y >= 0) {

        document.getElementById("xx").innerHTML = Math.round(X);
        document.getElementById("yy").innerHTML = Math.round(Y);

        }
        if (Y === 0 || Y < 0) {
            clearInterval(timer);
            document.getElementById("yy").innerHTML = 0;

        }






},160);

   
}
function reset(){
    clearInterval(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("xx").innerHTML = 0;
    document.getElementById("yy").innerHTML = 0;
    document.getElementById("iS").value = 0;
    document.getElementById("H").value = 0;
    document.getElementById("angle").value = 0;

    X = 0;
    Y = 0;
    draw();
}