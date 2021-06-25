class Particle{
    constructor(x,y, radius) {
    var options = {
        density: 1,
        restitution: 0.5,
        friction: 0,
        isStatic:false
         
    }
    this.radius = 10
    this.body = Bodies.circle(x,y, radius, options)
    this.color = color(random(0,255), random(0,255), random(0,255))
    this.radius = radius;
    World.add(world, this.body)
    }
    display(){
       push()
       fill(this.color)
       ellipseMode(RADIUS)
       ellipse(0,0,this.radius)
       pop()
    }
}