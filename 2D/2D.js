let angle = 0;
let speed = 0;
let acceleration = 0;
function clicked(){

    speed =Number(document.getElementById("iS").value);
    angle = Number(document.getElementById("angle").value);
    let hight = Number(document.getElementById("H").value);
    let gridX = Number(document.getElementById("graph").style.gridTemplateColumns);
    let gridY = Number(document.getElementById("graph").style.gridTemplateRows);

    console.log(speed , angle , hight);
    const angleRad = angle * Math.PI / 180;
    let Vx = speed * Math.cos(angleRad);
    let Vy = speed * Math.sin(angleRad);
    let sin90 = Math.sin(90 * Math.PI / 180);
    let maxY = (speed * speed) * (sin90 * sin90) / (2 * 9.81);
    Number(document.getElementById("graph").style.gridTemplateColumns = maxY)
    Number(document.getElementById("graph").style.gridTemplateRows = maxY);

    let X = 0;

    let Y = hight;
    let dt = 0.16
    const timer = setInterval(() => {

        Vx = Vx + acceleration * dt;
        Vy = Vy + -9.81 * dt;
        X = X + Vx * dt;
        Y = Y + Vy * dt;
        document.getElementById("dot").style.gridColumn = Math.round(X)  ; 
        document.getElementById("dot").style.gridRow = 100 - Math.round(Y) ;
        


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