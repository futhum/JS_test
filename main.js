function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let N = getRandomInt(1,100);
let N2 = getRandomInt(1,100); 

color = ["red", "green", "yellow"];


let Apple = function(age,color,size){
  this.age = age;
  this.color = color;
  this.size = size;
  this.rot = false;
  this.fall = false;
  this.ageFall = 0; 
}

Apple.prototype.fallDown = function(){
   this.fall = true;  
}

Apple.prototype.rotOn = function(){
   this.rot = true;
}

let Tree = function(apples){
  this.apples = apples;
  this.applesArr = [];
}

Tree.prototype.createApples = function(){
  if(this.applesArr.length < this.apples){
    this.applesArr.push(new Apple(getRandomInt(0, 30),color[getRandomInt(0, 2)],getRandomInt(1, 4)));
    this.createApples();
  } 
}

Tree.prototype.newApple = function (){
  this.apples += 1;
  this.applesArr.push(new Apple(getRandomInt(0, 30),color[getRandomInt(0, 2)],getRandomInt(1, 4)));
}


let Garden = function(){
  this.age = 0; 
  this.trees = getRandomInt(0, 10);
  this.treesArr = [];
  this._createTrees();
} 


Garden.prototype._createTrees = function(){
  let count = 0;
  while(this.treesArr.length < this.trees){
    this.treesArr.push(new Tree(getRandomInt(1,10)));
    this.treesArr[count].createApples();
    count++;
  } 
}

Garden.prototype.day = function(){
  this.age+=1;
  this.treesArr.forEach(function(value,index,treesArr){
    value.applesArr.forEach(function(value,index,applesArr){
      value.age += 1;
      if(value.fall == true){
        if(value.ageFall == 0){
          value.ageFall += 1;
        }
        if(value.ageFall == 1){
          value.rotOn();
        }
      }
      if(value.age > getRandomInt(28,32)){
        value.fallDown();
      }
    })
  })
  if(this.age%30 == 0){
    this.treesArr.forEach(function(value,index,treesArr){
      value.newApple();
    })
  }
  console.log(`one day passed`);
}

Garden.prototype.getCountApples = function(){
  let count = 0;
  this.treesArr.forEach(function(value,index,tressArr){
    value.applesArr.forEach(function(value,index,applesArr){
      if(value.fall == false){
        count++;
      }
    })
  })
  console.log(`the number of apples on the trees ${count}`);
} 


