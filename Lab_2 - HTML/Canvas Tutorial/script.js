const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function createShapes() {
  // Draw a rectangle
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 100, 100);

  // Draw a circle
  ctx.beginPath();
  ctx.arc(200, 200, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
}

createShapes();
// Function to create a moving rectangle

let x = 0;

function draw() {
  // Clear the area of the canvas where the moving rectangle was previously drawn
  ctx.clearRect(x - 1, 300, 50, 50);

  // Draw the rectangle
  ctx.fillStyle = "green";
  ctx.fillRect(x, 300, 50, 50);

  // Move the rectangle
  x += 1;
  if (x > canvas.width) {
    x = -50;
  }

  // Request the next frame
  requestAnimationFrame(draw);
}

// Start the animation
draw();
