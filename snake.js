window.onload = function(){
 
            var stage = document.getElementById('stage');
            var ctx = stage.getContext("2d");
            document.addEventListener("keydown", keyPush);
            setInterval(game, 80);
 
            const velocidade = 1;
 
            var posicaoX = 10;
            var posicaoY = 15;
            var macaX= macaY= 15;
            var tamanhoPeca = 30;
            var quantidadePeca = 20;
            var velocidadeX = velocidadeY = 0;
 
            var trail = [];
            tail = 5;
 
            function game() {
                posicaoX += velocidadeX;
                posicaoY += velocidadeY;
                
                if (posicaoX < 0) {
                    posicaoX = quantidadePeca - 1;
                }

                if (posicaoX > quantidadePeca - 1) {
                    posicaoX = 0;
                }
                if (posicaoY < 0) {
                    posicaoY = quantidadePeca - 1;
                }
                if (posicaoY > quantidadePeca - 1) {
                    posicaoY = 0;
                }
 
                ctx.fillStyle = "#4B8A08";
                ctx.fillRect(0,0, stage.width, stage.height);
 
                ctx.fillStyle = "#610B0B";
                ctx.fillRect(macaX*tamanhoPeca, macaY*tamanhoPeca, tamanhoPeca,tamanhoPeca);
 
                ctx.fillStyle = "#A4A4A4";
                for (var i = 0; i < trail.length; i++) {
                    ctx.fillRect(trail[i].x*tamanhoPeca, trail[i].y*tamanhoPeca, tamanhoPeca - 1, tamanhoPeca - 1);
                    if (trail[i].x == posicaoX && trail[i].y == posicaoY)
                    {
                        velocidadeX = velocidadeY= 0;
                        tail = 5;
                    }
                }
 
                trail.push({x:posicaoX, y:posicaoY})
                while (trail.length > tail) {
                    trail.shift();
                }
 
                if (macaX == posicaoX && macaY == posicaoY){
                    tail++;
                    macaX = Math.floor(Math.random()*quantidadePeca);
                    macaY = Math.floor(Math.random()*quantidadePeca);
                }
            }
 
            function keyPush(event) {
 
                switch (event.keyCode) {

                    case 37:
                        velocidadeX = -velocidade;
                        velocidadeY = 0;
                        break;

                    case 38:
                        velocidadeX = 0;
                        velocidadeY = -velocidade;
                        break;

                    case 39:
                        velocidadeX = velocidade;
                        velocidadeY = 0;
                        break;

                    case 40:
                        velocidadeX = 0;
                        velocidadeY = velocidade;
                        break;  

                    default:
                        break;
                }
            }
        }