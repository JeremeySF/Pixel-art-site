// Pixel Art Maker
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
const canvasSize = 16; // 16x16 pixels

function createGrid() {
    canvas.width = canvasSize * 20; // 20 pixels per cell
    canvas.height = canvasSize * 20;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += canvasSize) {
        for (let y = 0; y < canvas.height; y += canvasSize) {
            ctx.strokeRect(x, y, canvasSize, canvasSize);
        }
    }
}

function paintPixel(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cellX = Math.floor(x / canvasSize) * canvasSize;
    const cellY = Math.floor(y / canvasSize) * canvasSize;

    ctx.fillStyle = 'black';
    ctx.fillRect(cellX, cellY, canvasSize, canvasSize);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createGrid();
}

createGrid();
canvas.addEventListener('click', paintPixel);
document.getElementById('clearCanvas').addEventListener('click', clearCanvas);

// Simple Games
function startGame(gameName) {
    alert(`Starting ${gameName}...`);
}
