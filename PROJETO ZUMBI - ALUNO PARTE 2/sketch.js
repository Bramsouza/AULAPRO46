var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zumbiImg, zumbi;
var p1, np1;
var score = 0;
var balaImg, bala;




function preload(){

  bgImg = loadImage("assets/bg.jpeg")
  
  shooterImg = loadImage("assets/shooter_2.png")

  shooter_shooting = loadImage("assets/shooter_3.png");

  zumbiImg = loadImage("assets/zombie.png");

  p1 = loadImage("assets/p1.png"); 

  p2 = loadImage("assets/p2.png")

  //AULA 46  - PRÉ CARREGAR A IMAGEM DA BALA
  

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2+25,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

 
  zumbi = createSprite(displayWidth-900, displayHeight-300, 50, 50);
  zumbi.addImage(zumbiImg)
  zumbi.scale = 0.1
  zumbi.debug = true
  zumbi.setCollider("rectangle",0,0,500,500)

  //AULA 46 - CRIAR O OBJETO BALA
  
  

  np1 = createSprite(displayWidth-1400, displayHeight-300, 50, 90);
  np1.addImage(p1)
  np1.scale = 2
  np1.debug = true
  np1.setCollider("rectangle",0,0,70,70)
  np1.visible = false

}

function draw() {
  background(0); 
  
  //AULA 46 - CRIAÇÃO DE PONTUAÇÃO
  
  

  //AULA 46 - INSERÇÃO DE PERSEGUIÇÃO DO ZUMBI
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
    //AQUI
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
    //AQUI
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+30
    //AQUI
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
    //AQUI
  }

  //AULA 46 - NOVO PERSONAGEM SE MEXENDO COM CÓD. DE PERSEGUIÇÃO DO ZUMBI
  

  //AULA 46 - CONDIÇÃO DE TIRO USANDO A LETRA 'a' ou qualquer uma que desejar DO NOVO JOGADOR
  
  if(keyWentDown("space")){
 
    player.addImage(shooter_shooting)
    zumbi.velocityX = -4
      
    //AULA 46 - INSERÇÃO DE TIRO
    
  }
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
    zumbi.velocityX = 0;
    
  }

  //AULA 46 - TOQUE DO ZUMBI COM A BALA, DESTRUIÇÃO E CRIAÇÃO DE MAIS ZUMBIS
  

  //AULA 46 - ALTERAR O PLAYERZ1 PARA ZUMBI, POIS É A VARIÁVEL ORIGINAL E SERÁ CRIADO A PARTIR DELA.
  if(zumbi.isTouching(player)){
    player.destroy();
    playerz1.destroy()
    playerz1 = createSprite(displayWidth-200, displayHeight-500, 50, 50);
    playerz1.addImage(zumbiImg)
    playerz1.scale = 0.1
    playerz1.debug = true
    playerz1.setCollider("rectangle",0,0,300,300);
    playerz1.velocityX = -5
    
    np1.visible = true
   
  }
  
  
  drawSprites();
}



//AULA 45 - DECOMPOSIÇÃO DO JOGO PARTE 1
/*
1 - INSERIR ZUMBI
2 - CASO O JOGADOR APONTE PARA O ZUMBI ELE ANDA NA DIREÇÃO DELE
3 - CASO O JOGADOR NÃO APONTE MAIS, ELE IRÁ PARAR. 
4 - FAZER COLISÃO ENTRE O JOGADOR E CRIAR NOVO ZUMBI
5 - FAZER O NOVO ZUMBI ANDAR AUTOMATICAMENTE
6 - COLOCAR NOVO PERSONAGEM NO LUGAR
7 - ADICIONAR MOVIMENTO DE ESQUERDA E DIREITA NO PLAYER
*/

//AULA 46 - DECOMPOSIÇÃO DO JOGO PARTE 2
/*
1 - PONTUAÇÃO
2 - NOVO JOGADOR SE MEXER
3 - JOGADOR ANTIGO E NOVO FAZER ATIRAR
4 - INSERIR ITENS NO JOGO DE RECARGA DE BALA
5 - FAZER OS ZUMBIS ANDAREM NA DIREÇÃO DO PLAYER
6 - ATIRAR E DESTRUIR O ZUMBI
6 - CAUSAR DESTRUIÇÃO DA BALA AO TOCAR NO ZUMBI
*/