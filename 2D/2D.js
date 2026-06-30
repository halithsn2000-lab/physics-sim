let angle = 0;
let speed = 0;
let acceleration = 0;

function clicked(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext("2d");
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



    speed =Number(document.getElementById("iS").value);
    angle = Number(document.getElementById("angle").value);
    let hight = Number(document.getElementById("H").value);
    
    console.log(speed , angle , hight);
    const angleRad = angle * Math.PI / 180;
    let Vx = speed * Math.cos(angleRad);
    let Vy = speed * Math.sin(angleRad);
    let sin90 = Math.sin(90 * Math.PI / 180);
  
   

    let X = 0;

    let Y = hight;
    let dt = 0.16
    const timer = setInterval(() => {

        Vx = Vx + acceleration * dt;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(X, Gy, 5, 0, Math.PI * 2);
        ctx.fill();
        let Gy = 600 -  Y



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

