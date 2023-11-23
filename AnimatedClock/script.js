function watch() {
  const date = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.save(); // save default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2); // Rotate clock -90deg

  ctx.strokeStyle = "black";
  ctx.fillStyle = "#black";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "black";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  //Drwa hour lines
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.strokeStyle = "white";
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  //Drwa minute lines
  ctx.save();
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = "rgb(159, 174, 174)";
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //Get Time
  const hr = date.getHours() % 12;
  const minutes = date.getMinutes();
  const sec = date.getSeconds();

  // Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * minutes + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = "rgb(159, 174, 174)";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(70, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * minutes + (Math.PI / 1800) * sec);
  ctx.strokeStyle = "rgb(159, 174, 174)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(105, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Seconds hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = "rgb(159, 174, 174)";
  ctx.fillStyle = "rgb(159, 174, 174)";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();
  ctx.restore(); // restore default state
  requestAnimationFrame(watch);
}

requestAnimationFrame(watch);
