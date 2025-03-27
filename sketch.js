function setup() {
    createCanvas(400, 400);
    x = random (400);
    x =int(x)
    y = random (400);
    y = int(x)
  }
  
  function draw() {
    background("#FFBABA");
    
     textSize(25);
      textAlign (CENTER)
      stroke("#064E00")
      strokeWeight (2)
      fill("#00BB08")
    text ("Find the point sis!", 200, 35)
    
    
    x = x+random(-1, 1);
    y = y+random(-1, 1);
    
  x= constrain (x,0,400);
    y= constrain (y,50,400);
    
    let distancia;
  
    distancia = dist(mouseX, mouseY, x, y);
    
    let cor = map(distancia, 0, width, 255, 50);
    let azul = map(distancia, 0, width, 0, 255);
    
    fill(cor, 0, azul)
    stroke("#FFFFFF")
    strokeWeight(4);
    circle (mouseX, mouseY, distancia);
    //circle(x, y, 10);
    
    if(distancia <3){
      textSize(30);
      textAlign (CENTER)
      stroke("#000000")
      strokeWeight (2)
      fill("#00BB08")
      text("You found! Slay! 🔥💅", 200, 200);
      noLoop();
      
    }
  }