//Create variables here
var dog, database, foodS, foodStock;
function preload()
{
	//load images here
}

function setup() {
	database= firebase.database();
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "white";
    foodStock = database.ref('Food');
    foodStock.on("value", readStock);
    food = new Food(200, 200, 20, 20)
    var title = createElement('h2');
        title.html("dog");
        title.position(130,0);

        var button = createButton("feed now");
        button.position(250, 200);
        var greeting = createElement('h3');
         
        var button = createButton("lastfed");
        button.position(250, 200);
        var greeting = createElement('h3');
    
  
}


function draw() {  
  background("white");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeColor("brown");
  }
  food.display();
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
  
}

function writeStock(x){
database.ref("/").update({
  Food:x
})
}





