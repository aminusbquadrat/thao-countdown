<canvas id="bows"></canvas>

<script>
const canvas = document.getElementById("bows");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bows = [];

function createBow() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + Math.random() * 100;
  const size = Math.random() * 20 + 20; // Font size
  const speed = Math.random() * 1.5 + 0.5;
  const rotation = (Math.random() - 0.5) * 0.02; // Slight float
  const sway = (Math.random() - 0.5) * 1; // Horizontal sway

  bows.push({ x, y, size, speed, sway, rotation, angle: 0 });
}

function drawBows() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < bows.length; i++) {
    const b = bows[i];
    b.angle += b.rotation;
    b.x += Math.sin(b.angle) * b.sway;
    b.y -= b.speed;

    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(b.angle);
    ctx.font = `${b.size}px serif`;
    ctx.fillText("🎀", 0, 0);
    ctx.restore();

    if (b.y + b.size < 0) {
      bows.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  drawBows();
  if (bows.length < 60) createBow();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
</script>
