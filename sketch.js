var database;
var back_img;
var gameState = 0;
var playerCount = 0;

var allPlayers;
var player, form,game;
var player1,players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img;
var player_img;
var back;
var x,y;

function preload(){
  back_img = loadImage("images/track.jpg");
  player_img = loadImage("images/car1.png");
  fruit1_img = loadImage("images/car2.png");
  fruit2_img = loadImage("images/car3.png");
  fruit3_img = loadImage("images/car4.png");
  //fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 1) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}