// Initialize canvas property
let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');
let W = 400, H = 400;
let BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

// draw a single square at (x, y)
function drawBlock(x, y) {
  ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H - 1);
  ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H - 1);
}

// draw the board and the moving shape
function render() {
  ctx.clearRect(0, 0, W, H);

  ctx.strokeStyle = 'black';
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      if (board[y][x]) {
        ctx.fillStyle = colors[board[y][x] - 1];
        drawBlock(x,y);
      }
    }
  }

  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'black';
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (current[y][x]) {
        ctx.fillStyle = colors[current[y][x] - 1];
        drawBlock(currentX + x, currentY + y);
      }
    }
  }
}

setInterval(render, 30);
