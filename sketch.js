 var gamestate="answer";
 var backdrop;

function preload() 
{
  //loading the images here
  i=loadImage("glass.jpg");
  backdrop=loadImage("backdrop.jpg");
  
}

function setup()
 {
   // creating sprites and objects 
  createCanvas(1530,3000);
  Answers=new options();
  up=new Update();
  im=createSprite(80,1200,20,20);
  im.addImage(i);
 }

function draw() 
{
  background(backdrop);  
  code();
  Answers.display();
  questionFive();
  questionFour();
  questionOne();
  questionSix();
  questionThree();
  questionTwo();
  up.display();
  drawSprites();
  up.result();
  text("Click on the console for the results later",10,1630);
}
