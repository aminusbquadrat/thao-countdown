<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Coquette Bow Animation</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background-color: #fff0f5; /* soft coquette pink background */
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>
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
      const size = Math.random() * 20 + 24; // Font size
      const speed = Math.random() * 1.5 + 0.5;
      const sway = (Math.random() - 0.5) * 2;
      const angle = Math.random() * Math.PI * 2;

      bows.push({ x, y, size, speed, sway, angle });
    }

    function drawBows() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < bows.length; i++) {
        const b = bows[i];

        // Update position
        b.angle += 0.01;
        b.x += Math.sin(b.angle) * b.sway;
        b.y -= b.speed;

        ctx.font = `${b.size}px serif`;
        ctx.fillText("🎀", b.x, b.y);

        // Remove if off screen
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
</body>
</html>
