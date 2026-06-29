let angle = 0;
let speed = 0;
let acceleration = 0;
function clicked(){

    speed =Number(document.getElementById("iS").value);
    angle = Number(document.getElementById("angle").value);
    acceleration = Number(document.getElementById("A").value);  
    console.log(speed , angle , acceleration);
    const angleRad = angle * Math.PI / 180;
    let Vx = speed * Math.cos(angleRad);
    let Vy = speed * Math.sin(angleRad);
    let X = 0;
    let Y = 1;
    let dt = 0.16
    const timer = setInterval(() => {

        Vx = Vx + acceleration * dt;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;

        if (Y > 0) {

        document.getElementById("xx").innerHTML = Math.round(X);
        document.getElementById("yy").innerHTML = Math.round(Y);
        }
        if (Y === 0 || Y < 0) {
            clearInterval(timer);
            document.getElementById("yy").innerHTML = 0;
        }






},16);


   
    


}