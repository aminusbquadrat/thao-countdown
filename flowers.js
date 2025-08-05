const canvas = document.getElementById("flowers");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flowers = [];

function createFlower() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + Math.random() * 100;
  const size = Math.random() * 20 + 10;
  const speed = Math.random() * 2 + 1;
  const color = ["#ff69b4", "#ffb6c1", "#ffc0cb", "#ffe4e1"][
    Math.floor(Math.random() * 4)
  ];

  flowers.push({ x, y, size, speed, color });
}

function drawFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < flowers.length; i++) {
    const f = flowers[i];
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
    ctx.fillStyle = f.color;
    ctx.fill();
    f.y -= f.speed;

    if (f.y + f.size < 0) {
      flowers.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  drawFlowers();
  if (flowers.length < 80) createFlower();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
