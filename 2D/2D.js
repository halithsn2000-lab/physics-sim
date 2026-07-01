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

let scaleX;
let scaleY;
let Ix;
let Iy;
let scale = 20;
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

// drawing the grid on the canvas


function clicked(){
    
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
     dt = 0.36
    Y = hight;

    // deviding the forces into the x and y axes




    
    timer = setInterval(() => {

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
           canvas.width / (maxX + 100),
           canvas.height / (maxY + 100)
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

        document.getElementById("xx").innerHTML = Math.round(X);
        document.getElementById("yy").innerHTML = Math.round(Y);

        }
        // displaying the values of x and y on the screen live
        if (Y === 0 || Y < 0) {
            
            clearInterval(timer);
            document.getElementById("yy").innerHTML = 0;

            // stopping the simulation when the projectile hits the ground

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
    trajectories = [];
    trajectory = [];
    X = 0;
    Y = 0;
    draw();
}

// resetting the simulation and clearing the canvas