var points = [];
var tetherDist = 100;
var amount = 40;
var bounds = tetherDist;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < amount; i++)
  {
    points.push(new   Point(random(0-bounds,width+bounds),random(0-bounds,height+bounds),random(0,2*PI),0.5))
    
  }
  
  points.push(new Point(mouseX,mouseY,0,0))
}

function draw() {
  background(0);
  for (var i = 0; i < points.length; i++)
  {
    points[i].move();
    points[i].draw();
  }
  
  points[points.length-1].x = mouseX;
  points[points.length-1].y = mouseY;
  
}

class Point
{
  
  constructor(x,y,dir,speed)
  {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.speed = speed;
    
  }
  
  move()
  {
    this.x += cos(this.dir)*this.speed;
    this.y += sin(this.dir)*this.speed;
    if (this.x < 0-bounds)
      this.x = width+bounds;
    if (this.x > width+bounds)
      this.x = 0-bounds;
    if (this.y < 0-bounds)
      this.y = width+bounds;
    if (this.y > width+bounds)
      this.y = 0-bounds;
    
  }
  
  draw()
  {
    stroke(255);
    point(this.x,this.y)
    for (var i = 0; i < points.length; i++)
    {
      if (distance(this.x,this.y,points[i].x,points[i].y) < tetherDist)
      {
        
        var clr = map(distance(this.x,this.y,points[i].x,points[i].y),0,tetherDist,0,255)*-1+255
        stroke(255,clr);
        line(this.x,this.y,points[i].x,points[i].y);
      }
    }
  }
}
        
         
function distance(x1,y1,x2,y2)
{
  var distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
  return distance;
}