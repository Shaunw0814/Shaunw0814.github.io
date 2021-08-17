window.onload = function ballBounce(){
    
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 8)

    var ball = document.getElementById("animationCircle")
    var area = document.getElementById("animationContainer")
    var maxX = area.clientWidth;
    var maxY = area.clientHeight;
    var posX = Math.floor(Math.random()*maxX - 2) + 2;
    var posY = Math.floor(Math.random()*maxY - 2) + 2; 
    ball.style.top = posY + 'px';
    ball.style.left = posX + 'px';

    //making colors
    let blueColor = "#00d9ffc9";
    let greenColor = "#00ff55c9";
    let yellowColor = "#eeff00";
    let orangeColor = "#ff7300c9";
    let redColor = "#ff0000c9";

    const colors = [blueColor, greenColor, yellowColor, orangeColor, redColor];

    //randomizers
    let colorPicker = 0;
    let checkX = Math.floor((Math.random() * 2));
    let checkY =  Math.floor((Math.random() * 2));
    let randomX = Math.floor((Math.random() * 2)+1);
    let randomY = Math.floor((Math.random() * 2)+1);

    function frame(){
        ball.style.backgroundColor = colors[colorPicker];
        maxX = area.clientWidth;
        maxY = area.clientHeight;
        if(posX >= maxX){
            checkX = 1;
            randomX = Math.floor((Math.random() * 2)+1);
            colorPicker++;
            if(colorPicker == colors.length){
                colorPicker = 0;
            }
        }

        if(posY >= maxY){
            checkY = 1;
            randomY = Math.floor((Math.random() * 2)+1);
            colorPicker++;
            if(colorPicker == colors.length){
                colorPicker = 0;
            }
        }

        if(posX < 0){
            checkX = 0;
            randomX = Math.floor((Math.random() * 2)+1);
            colorPicker++;
            if(colorPicker == colors.length){
                colorPicker = 0;
            }
        }
        if(posY < 0){
            checkY = 0;
            randomY = Math.floor((Math.random() * 2)+1);
            colorPicker++;
            if(colorPicker == colors.length){
                colorPicker = 0;
            }
        }

    
        if(checkX == 0){
            posX += randomX;
        }
        else{
            posX -= randomX;
        }
    
        if(checkY == 0){
            posY += randomY;
        }
        else{
            posY -= randomY;
        }
    
        ball.style.top = posY + 'px';
        ball.style.left = posX + 'px';
    }
  
}


window.onbeforeunload = function () {
    history.scrollRestoration = "manual"
}