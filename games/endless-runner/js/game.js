let startBackground;
let btnStart;
let startText;

let background;
let bgForest;
let bgForest2;
let bgBottom;
let bgBottom2;
let bgBottom3;
let bgTop;
let bgTop2;
let bgTop3;
let dragon;
let scoreText;
let lifeText;
let life;
let score;
let coin = [];
let obstacles = [];

let gameOverBackground;
let retryBtn;
let retryBtnText;
let finalScore;

function initGame() {
  gameArea.start();
  startBackground = new drawBackground(480,270,"black",0,0);
  btnStart = new drawBackground(30,30,"blue",10,120);
  startText = new drawText('20px', 'Arial', 'white', 30, 40);
}

function startGame() {
  // gameArea.start();
  background = new drawBackground(480,270,"gray",0,0);
  bgForest = new drawBackground(480,270,"img/bg_back_A.png",0,0,'background');
  bgForest2 = new drawBackground(480,270,"img/bg_back_B.png",0,0,'background');
  bgBottom = new drawBackground(480,270,"img/bg_front_ground_A.png",0,0,'background');
  bgBottom2 = new drawBackground(480,270,"img/bg_front_ground_B.png",0,0,'background');
  bgBottom3 = new drawBackground(480,270,"img/bg_front_ground_C.png",0,0,'background');
  bgTop = new drawBackground(480,270,"img/bg_superfront_A.png",0,0,'background');
  bgTop2 = new drawBackground(480,270,"img/bg_superfront_B.png",0,0,'background');
  bgTop3 = new drawBackground(480,270,"img/bg_superfront_C.png",0,0,'background');
  dragon = new drawDragon(30,30,"red",10,120);
  lifeText = new drawText('20px', 'Arial', '#fff', 30, 40);
  scoreText = new drawText('20px', 'Arial', '#fff', 110, 40);
  score = 0;
  life = 3;
}

function retryGame() {
  gameOverBackground = new drawBackground(480,270,"blue",0,0);
  retryBtn = new drawBackground(30,30,"red",10,120);
  retryBtnText = new drawText('20px', 'Arial', 'white', 150, 40);
  finalScore = new drawText('20px', 'Arial', 'white', 30, 40);
}

let gameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(startGameArea, 20);
    // this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', function (e) {
      gameArea.key = e.keyCode;
    });
    window.addEventListener('keyup', function (e) {
      gameArea.key = false;
    });
    window.addEventListener('mousedown', function (e) {
      gameArea.x = e.pageX;
      gameArea.y = e.pageY;
    });
    window.addEventListener('mouseup', function (e) {
      gameArea.x = false;
      gameArea.y = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  }
}

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

function drawDragon(width, height, color, x, y) {
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
  this.hitCoin = function (coinobj) {
    let myleft = this.x;
    let myright = this.x + (this.width);
    let mytop = this.y;
    let mybottom = this.y + (this.height);
    let otherleft = coinobj.x;
    let otherright = coinobj.x + (coinobj.width);
    let othertop = coinobj.y;
    let otherbottom = coinobj.y + (coinobj.height);
    let hit = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      hit = false;
    }
    return hit;
  }
  this.hitObstacle = function (obstacleobj) {
    let myleft = this.x;
    let myright = this.x + (this.width);
    let mytop = this.y;
    let mybottom = this.y + (this.height);
    let otherleft = obstacleobj.x;
    let otherright = obstacleobj.x + (obstacleobj.width);
    let othertop = obstacleobj.y;
    let otherbottom = obstacleobj.y + (obstacleobj.height);
    let hit = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      hit = false;
    }
    return hit;
  }
}

function drawObstacle(width, height, color, x, y, status) {
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
  this.hit = function() {
    this.status = 'hit';
  }
}

function drawCoin(width, height, color, x, y) {
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
  this.clear = function () {
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
  }
}

function drawText(width, height, color, x, y) {
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

function startGameArea() {
  gameArea.clear();
  if (gameArea.x && gameArea.y) {
    if (btnStart.clicked()) {
      clearInterval(gameArea.interval);
      setTimeout(function () {
        startGame();
        gameArea.interval = setInterval(updateGameArea, 20);
      },250);
    }
  }
  startBackground.newPos();
  startBackground.update();
  btnStart.newPos();
  btnStart.update();
  startText.text = 'Play Game';
  startText.update();
}

function updateGameArea() {
  gameArea.clear();
  gameArea.frameNo += 1;
  // background.newPos();
  // background.update();

  bgForest.speedX = -1;;
  bgForest.newPos();
  bgForest.update();
  bgForest2.speedX = -1;;
  bgForest2.newPos();
  bgForest2.update();

  bgBottom.speedX = -5;
  bgBottom.newPos();
  bgBottom.update();
  bgBottom2.speedX = -5;
  bgBottom2.newPos();
  bgBottom2.update();
  bgBottom3.speedX = -5;
  bgBottom3.newPos();
  bgBottom3.update();

  bgTop.speedX = -4;
  bgTop.newPos();
  bgTop.update();
  bgTop2.speedX = -4;
  bgTop2.newPos();
  bgTop2.update();
  bgTop3.speedX = -4;
  bgTop3.newPos();
  bgTop3.update();

  initObstacle();
  initCoin();
  initDragon();
  initGameStatus();
}

function retryGameArea() {
  gameArea.clear();
  gameOverBackground.newPos();
  gameOverBackground.update();
  if (gameArea.x && gameArea.y) {
    if (retryBtn.clicked()) {
      clearInterval(gameArea.interval);
      setTimeout(function () {
        startGame();
        gameArea.frameNo = 0;
        coin = [];
        obstacles = [];
        gameArea.interval = setInterval(updateGameArea, 20);
      },250);
    }
  }
  retryBtn.newPos();
  retryBtn.update();
  retryBtnText.text = 'Retry';
  retryBtnText.update();
  finalScore.text = 'Score: ' + score;
  finalScore.update();
}

function initObstacle() {
  let x = gameArea.canvas.width;
  let y = gameArea.canvas.height;

  if (gameArea.frameNo == 1 || everyInterval(450)) {
    obstacles.push(new drawObstacle(30,60,"blue",x,y - 40,''));
    obstacles.push(new drawObstacle(30,60,"green",x + 150, 0,''));
  }

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].speedX = -1.5;
    obstacles[i].newPos();
    obstacles[i].update();
  }

  for (let i = 0; i < obstacles.length; i++) {
    if (dragon.hitObstacle(obstacles[i]) && obstacles[i].status == '') {
      life -= 1;
      obstacles[i].hit();
    }
  }
}

function initCoin() {
  if (gameArea.frameNo == 1 || everyInterval(450)) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        coin.push(new drawCoin(30, 30, "yellow", (j * 35) + 450, (i * 35) + 100));
      }
    }
  }

  for (let i = 0; i < coin.length; i++) {
    coin[i].speedX = -1.5;
    coin[i].newPos();
    coin[i].update();
  }

  for (let i = 0; i < coin.length; i++) {
    if (dragon.hitCoin(coin[i])) {
      coin[i].clear();
      score += 10;
    }
  }
}

function initDragon() {
  dragon.speedX = 0;
  dragon.speedY = 0;
  if (gameArea.key && gameArea.key == 38) {
    dragon.speedY = -2;
    if (dragon.y <= 10) {
      dragon.speedY = 0;
    }
  }
  if (gameArea.key && gameArea.key == 40) {
    dragon.speedY = 2;
    if (dragon.y >= 260 - dragon.height) {
      dragon.speedY = 0;
    }
  }
  dragon.newPos();
  dragon.update();
}

function initGameStatus() {
  scoreText.text = 'Score: ' + score;
  scoreText.update();

  lifeText.text = 'Life: ' + life;
  lifeText.update();

  if (life == 0) {
    clearInterval(gameArea.interval);
    setTimeout(function () {
      retryGame();
      gameArea.interval = setInterval(retryGameArea, 20);
    },250);
    // gameArea.stop();
  }
}

function everyInterval(n) {
  if ((gameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}
