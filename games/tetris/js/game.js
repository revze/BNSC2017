let canvasWidth = 800;
let canvasHeight = 400;

let background;

//Method that use to draw start screen of game
function initGame() {
  gameArea.start();
  background = new drawBackground(canvasWidth,canvasHeight,"black",0,0,'');
}

//Initialize object that use to frame and keyboard control in game
let gameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(startGameArea, 20);
    // this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  }
}

// Method that use to draw background in game
function drawBackground(width, height, color, x, y, type) {
  this.gamearea = gameArea;
  this.type = type;
  if (type == 'image' || type == 'background') {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = gameArea.context;
    if (type == 'image' || type == 'background') {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);

        if (type == 'background') {
          ctx.drawImage(this.image,
            this.x + this.width,
            this.y,
            this.width, this.height);
        }
    }
    else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type == 'background') {
      if (this.x == -(this.width)) {
        this.x = 0;
      }
    }
  }
  this.clicked = function () {
    let myleft = this.x;
    let myright = this.x + (this.width);
    let mytop = this.y;
    let mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
      clicked = false;
    }
    return clicked;
  }
}

// Method that use to draw start screen in game
function startGameArea() {
  gameArea.clear();
  background.newPos();
  background.update();
}
