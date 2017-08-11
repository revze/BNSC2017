let startBackground;
let btnStart;
let startText;

function initGame() {
  gameArea.start();
  startBackground = new drawStartBackground(480,270,"gray",0,0);
  btnStart = new drawStartBtn(30,30,"red",10,120);
  startText = new drawStartText('20px', 'Arial', 'black', 30, 40);
}

let gameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', function (e) {
      gameArea.key = e.keyCode;
    });
    window.addEventListener('keyup', function (e) {
      gameArea.key = false;
    })
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  }
}

function drawStartBackground(width, height, color, x, y) {
  this.gamearea = gameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function drawStartBtn(width, height, color, x, y) {
  this.gamearea = gameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function drawObstacle(width, height, color, x, y) {
  this.gamearea = gameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.status = status;
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function drawStartText(width, height, color, x, y) {
  this.gamearea = gameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = gameArea.context;
    ctx.font = this.width + ' ' + this.height;
    ctx.fillStyle = color;
    ctx.fillText(this.text, this.x, this.y);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  gameArea.clear();
  startBackground.newPos();
  startBackground.update();
  btnStart.newPos();
  btnStart.update();
  startText.text = 'Play Game';
  startText.update();
}
