window.onload = function ballBounce(){
    
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5)

    var ball = document.getElementById("animationCircle")
    var area = document.getElementById("animationContainer")
    var maxX = area.clientWidth;
    var maxY = area.clientHeight;
    var posX = 0;
    var posY = 0; 
    var randomX = Math.floor((Math.random() * 3)+1);
    var randomY = Math.floor((Math.random() * 3)+1);

    let checkX = 0;
    let checkY = 0;

    function frame(){
        maxX = area.clientWidth;
        maxY = area.clientHeight;
        if(posX >= maxX){
            checkX = 1;
            randomX = Math.floor((Math.random() * 2)+1);
        }

        if(posY >= maxY){
            checkY = 1;
            randomY = Math.floor((Math.random() * 2)+1);
        }

        if(posX < 0){
            checkX = 0;
            randomX = Math.floor((Math.random() * 2)+1);
        }
        if(posY < 0){
            checkY = 0;
            randomY = Math.floor((Math.random() * 2)+1);
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
