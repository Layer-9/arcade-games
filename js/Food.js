
function Food() {
	this.x = 0; 
	this.y = 0; 
  
	this.spawnFood = function() {
	  var maxX = floor(width / 40); 
	  var maxY = floor(height / 40); 
	  this.x = floor(random(maxX)); 
	  this.y = floor(random(maxY)); 
	  this.x *= 40; 
	  this.y *= 40; 
  
	}
  
	this.drawFood = function() {
		
  
	  imgfood = image(foodimg, this.x + 10 , this.y + 10 , 20, 20)
	  
  
	  if (snake.eat(food)) {
		remove(imgfood)
	  }
  
  
	}
  
  
  }