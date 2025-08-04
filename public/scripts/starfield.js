const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let width, height, stars = [];
let maxDistance;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  maxDistance = Math.sqrt(width * width + height * height) / 2;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(spawnStar(true)); // initial = true
  }
}

function spawnStar(initial = false) {
  const angle = Math.random() * Math.PI; // upward only
  const distance = Math.random() * maxDistance;

  // Random offset from center
  const offsetX = (Math.random() - 0.5) * width;
  const offsetY = (Math.random() - 1) * (height / 2); // top half only

  return {
    angle,
    distance,
    offsetX,
    offsetY,
    speed: 0.1 + Math.random() * 0.25,
    opacity: initial ? Math.random() : 0,
  };
}




function animate() {
  updateStars();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resize();
  createStars(550);
});

resize();
createStars(550);
animate();

function updateStars() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.distance += star.speed;

    const px = width / 2 + Math.cos(star.angle) * star.distance;
    const py = height / 2 - Math.sin(star.angle) * star.distance;

    if (py > height / 2) continue;

    const size = Math.min(1, (star.distance / maxDistance) * 1);
    star.opacity = Math.min(1, star.opacity + 0.02);

    // ✨ Glow effect
    ctx.save(); // save current canvas state
    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 100, 255, ${star.opacity})`;
    ctx.shadowBlur = 8; // amount of glow
    ctx.shadowColor = `rgba(255, 100, 255, ${star.opacity})`;
    ctx.fill();
    ctx.restore(); // restore state to avoid affecting other elements

    if (px < 0 || px > width || py < 0) {
      stars[i] = spawnStar();
    }
  }
}

