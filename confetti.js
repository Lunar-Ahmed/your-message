const confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  { front: 'red', back: 'darkred' },
  { front: 'green', back: 'darkgreen' },
  { front: 'blue', back: 'darkblue' },
  { front: 'yellow', back: 'darkyellow' },
  { front: 'orange', back: 'darkorange' },
  { front: 'pink', back: 'darkpink' },
  { front: 'purple', back: 'darkpurple' },
  { front: 'turquoise', back: 'darkturquoise' }
];

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function initConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30)
      },
      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1
      },
      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1
      },
      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50)
      }
    });
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = (confetto.dimensions.x * confetto.scale.x);
    let height = (confetto.dimensions.y * confetto.scale.y);

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Define back side
    ctx.fillStyle = confetto.color.back;
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Flip canvas to draw front side
    ctx.scale(1, 1);
    ctx.fillStyle = confetto.color.front;
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Rotation
    confetto.rotation += confetto.velocity.x * 0.03;

    // Remove confetti when out of view
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
  });

  window.requestAnimationFrame(render);
}

function startConfetti() {
  initConfetti();
  render();
}
