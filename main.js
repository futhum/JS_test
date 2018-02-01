function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let N = getRandomInt(1,100);
let N2 = getRandomInt(0,30); 


let Apple = function(age,color,size){
  this.age = age;
  this.color = color;
  this.size = size;
  this.rot = 0;
  this.fall = 0;
}

Apple.prototype.fallDown = function(){
   this.fall = 1;  
}

Apple.prototype.rotOn = function(){
   this.rot = 1;
}

Apple.prototype.fallStat = function() {
  return this.fall;
}

let Garden = function(age,apples){
  this.age = age; 
  this.apples = apples;
  this.applesArr = [];
} 


Garden.prototype.newApples = function(){
  if(this.applesArr.length < this.apples){
    this.applesArr.push(new Apple(getRandomInt(0, 30),"red",2));
    this.newApples(getRandomInt(0, 30));
  } 
}
Garden.prototype.day = function(){
  this.age+=1;
  console.log("1 day gone");
}

Garden.prototype.getCountApples = function(){
  let count = 0;
  for(let i = 0;i<this.apples; i++){
    count += this.applesArr[i].fallStat();
  }
  console.log(count);
} 

garden1 = new Garden(N2,N);
garden1.newApples();

