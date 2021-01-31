class Paper {
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body=Bodies.circle(this.x,this.body,this.r/2,options)
    }

   display(){
    var pos = this.body.position;
       push()
       translate(pos.x,pos.y);
       rectMode(CENTER)
       strokeWeight(3);
       fill(255,0,255)
       ellipse(0,0,this.r,this.r);
       pop()
   }
}