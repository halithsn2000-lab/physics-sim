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
let time;
let scaleX;
let scaleY;
let Ix;
let Iy;
let scale = 1;
let trajectories = [];
let trajectory = [];
let i = 0;
let maxX = 0;
let maxY = 0;

// setting the global variables , so they can be used in multiple functions

function draw(){
canvas = document.getElementById('myCanvas');

     ctx = canvas.getContext("2d");
    




     ctx.beginPath();
     ctx.moveTo(100 , 1)
     ctx.lineTo(100,600 );
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(100 / scale)+"m", 110, 590);

     ctx.beginPath();
     ctx.moveTo(200 , 1)
     ctx.lineTo(200,600 );
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(200 / scale)+"m", 210, 590);

     ctx.beginPath();
     ctx.moveTo(300 ,1);
     ctx.lineTo(300 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(300 / scale)+"m", 310, 590);  

     ctx.beginPath();
     ctx.moveTo(400 ,1);
     ctx.lineTo(400 , 600);
     ctx.strokeStyle = " black";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(400 / scale)+"m", 410, 590);
     
     ctx.beginPath();
     ctx.moveTo(500 ,1);
     ctx.lineTo(500 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(500 / scale)+"m", 510, 590);   

     ctx.beginPath();
     ctx.moveTo(600 ,1);
     ctx.lineTo(600 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(600 / scale)+"m", 610, 590);

     ctx.beginPath();
     ctx.moveTo(700 ,1);
     ctx.lineTo(700 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(700 / scale)+"m", 710, 590);

     ctx.beginPath();
     ctx.moveTo(1 ,200);
     ctx.lineTo(800 , 200);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(400 / scale)+"m", 760, 190);

     ctx.beginPath();
     ctx.moveTo(800 ,100);
     ctx.lineTo(1 , 100);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(500 / scale)+"m", 760, 90);

     ctx.beginPath();
     ctx.moveTo(1 ,400);
     ctx.lineTo(800 , 400);
     ctx.strokeStyle = "gray";
     ctx.stroke()
     ctx.beginPath();
     ctx.moveTo(800 ,300);
     ctx.lineTo(1 , 300);
     ctx.strokeStyle = "black";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(300 / scale)+"m", 760, 290);
     
     ctx.beginPath();
     ctx.moveTo(800 ,200);
     ctx.lineTo(1 , 200);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(200 / scale)+"m", 760, 396);

     ctx.beginPath();
     ctx.moveTo(800 ,500);
     ctx.lineTo(1 , 500);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(100 / scale)+"m", 760, 490);
     
};
draw()

// drawing the grid on the canvas


function clicked(){
    time = 0;
    X = 0;
    draw() 
    clearInterval(timer);
    speed =Number(document.getElementById("iS").value);
    angle = Number(document.getElementById("angle").value);
    hight = Number(document.getElementById("H").value);
    
     angleRad = angle * Math.PI / 180;
     Vx = speed * Math.cos(angleRad);
     Ix = speed * Math.cos(angleRad);
     Vy = speed * Math.sin(angleRad);
     Iy = speed * Math.sin(angleRad);
     dt = 0.16
    Y = hight;

    // deviding the forces into the x and y axes




    
    timer = setInterval(() => {
    time = time  + 160/1000;
    document.getElementById("time").innerHTML = "Time : " + Math.round(time / 0.25) * 0.25 + "s";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
        Vx = Vx + acceleration * dt;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;



        trajectory.push({x: X , y: Y});



         maxX = Math.max(maxX, X);
         maxY = Math.max(maxY, Y);

           scale = Math.min(
           canvas.width / (maxX + 10),
           canvas.height / (maxY + 10)
           );




        // live simulation and storing values of x and y in an array so that the trajectory can be drawn later
;
          for (let i = 0; i < trajectory.length; i++) {
            ctx.beginPath();
            ctx.arc(
              trajectory[i].x * scale,
              600 - trajectory[i].y * scale,
              3,
              0,
              Math.PI * 2
             );         
            ctx.fill();
         }
        

        

    
        // drawing the projectile on the canvas


        if (Y >= 0) {

        document.getElementById("xx").innerHTML = "X : " + Math.round(X) + "m";
        document.getElementById("yy").innerHTML = "Y : " + Math.round(Y) + "m";

        }
        // displaying the values of x and y on the screen live
        if (Y === 0 || Y < 0) {
            
            clearInterval(timer);
            document.getElementById("yy").innerHTML = "Y : 0m";
            document.getElementById("maxY").innerHTML = "Max Y : " + Math.round(maxY) + "m";

            // stopping the simulation when the projectile hits the ground

        }






},160);
}

function reset(){
    time = 0;
    document.getElementById("time").innerHTML = 0 + "s";
    clearInterval(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("xx").innerHTML = "X : 0m";
    document.getElementById("yy").innerHTML = "Y : 0m";
    document.getElementById("time").innerHTML = "Time : 0s";
    document.getElementById("maxY").innerHTML = "Max Y : 0m";
    document.getElementById("iS").value = 0;
    document.getElementById("H").value = 0;
    document.getElementById("angle").value = 0;
    trajectories = [];
    trajectory = [];
    scale = 1;
    X = 0;
    Y = 0;
    time = 0;
    maxX = 0;
    maxY = 0;
    Vx = 0;
    draw();
}

// resetting the simulation and clearing the canvas