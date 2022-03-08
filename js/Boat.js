class Boat {
    constructor(x, y, width, height,boatPos) {
        var options = {
           isStatic : true,
           restitution : 1.2,
           density : 1.2, 
        }
      
      

      this.boat = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      this.boat_image = loadImage("assets/boat.png");
      this.boatPosition = boatPos;
      World.add(world,this.boat);
    }

      display(){
           var pos = this.boat.position;
           push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            image(this.boat_image, 0, this.boatPosition, this.width, this.height);
            pop();
            

      }
      
    }