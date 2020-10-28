let x; // variables

let r;
let g;
let b;

function setup() {
    createCanvas(400, 400);
    x = 20;

    r = 0;
    g = 0;
    b = 0;
  }
  
  function draw() {
    background(r,g,b);
    ellipse(x,50,80,80);
    x+=5;
    if(x > 400){
        x = -50;
    }
  }

  function mousePressed() {
     r = random(255); 
     g = random(255); 
     b = random(255); 
  }