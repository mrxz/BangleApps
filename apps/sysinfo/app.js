
let offset = 0;
function drawRow(title, value) {
  g.drawString(title + ":", 10, offset);
  g.drawString(value, 100, offset);
  offset += 25;
}

function draw() {
  g.reset().clearRect(Bangle.appRect);
  g.setFont("12x20").setFontAlign(-1, -1);
  offset = 22;

  drawRow("Baro", Bangle.isBarometerOn());
  drawRow("GPS", Bangle.isGPSOn());
  drawRow("HRM", Bangle.isHRMOn());
  drawRow("Compass", Bangle.isCompassOn());
  drawRow("Charging", Bangle.isCharging());
  drawRow("LCD", Bangle.isLCDOn());
}

g.reset().clear();

Bangle.loadWidgets();
Bangle.drawWidgets();

draw();