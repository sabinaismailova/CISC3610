// JavaScript code for interacting with the canvas
window.onload = function () {
  const spriteSheetPath = "spritesheet.png";
  const spriteWidth = 480; // Width of each sprite frame
  const spriteHeight = 301; // Height of each sprite frame
  const totalFrames = 100; // Total number of frames in the sprite sheet
  let currentFrame = 0;
  
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  const spriteCanvas = document.getElementById('spriteCanvas');
  const spriteCtx = spriteCanvas.getContext('2d');

  const spriteSheet = new Image();
  spriteSheet.onload = startAnimation;
  spriteSheet.src = spriteSheetPath;

  // Add your drawing code here
  context.fillStyle = "#d68d9c";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //ground
  context.fillStyle = "#7b92a6";
  context.fillRect(0, 450, canvas.width, 150);

  //painting frame
  context.fillStyle = "#61778b";
  context.fillRect(0, 0, 500, 70);

  //painting background
  context.fillStyle = "#f8f8df";
  context.fillRect(0, 0, 480, 50);

  //couch arm rest
  context.fillStyle = "#8fb8c0";
  context.strokeStyle = "#587c86";
  context.fillRect(600, 380, 150, 170);
  context.strokeRect(600, 380, 150, 170);

  //couch sitting area
  context.fillStyle = "#aeced3";
  context.fillRect(0, 437, 687, 50);

  //couch bottom left
  context.fillStyle = "#8fb8c0";
  context.rect(0, 487, 280, 80);
  context.fill();
  context.strokeStyle = "#587c86";
  context.lineWidth = 1;
  context.stroke();

  //couch bottom right
  context.fillStyle = "#8fb8c0";
  context.rect(280, 487, 420, 80);
  context.fill();
  context.strokeStyle = "#587c86";
  context.stroke();

  //couch backdrop
  context.fillStyle = "#8fb8c0";
  context.rect(0, 137, 600, 300);
  context.fill();
  context.stroke();

  //couch stripes
  context.lineWidth = 2;
  context.strokeStyle = "#aeced3";
  for (let i = 20; i <= 600; i += 20) {
    let x1 = i;
    let x2 = i;
    let y1 = 137;
    let y2 = 437;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  for (let i = 20; i <= 280; i += 20) {
    let x1 = i;
    let x2 = i;
    let y1 = 487;
    let y2 = 567;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  for (let i = 300; i <= 687; i += 20) {
    let x1 = i;
    let x2 = i;
    let y1 = 487;
    let y2 = 567;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  for (let i = 600; i <= 750; i += 20) {
    let x1 = i;
    let x2 = i;
    let y1 = 380;
    let y2 = 550;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  //circle on couch backdrop
  context.lineWidth = 3;
  context.strokeStyle = "#587c86";
  context.beginPath();
  context.arc(280, 287, 7, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();
  context.closePath();

  //couch leg front
  context.lineWidth = 2;
  context.fillStyle = "#2d3138";
  context.beginPath();
  context.moveTo(630, 568);
  context.lineTo(660, 568);
  context.lineTo(656, 650);
  context.lineTo(650, 650);
  context.lineTo(630, 568);
  context.closePath();
  context.fill();
  context.strokeStyle = "#2d3138";
  context.stroke();

  //couch leg back
  context.lineWidth = 2;
  context.fillStyle = "#2d3138";
  context.beginPath();
  context.moveTo(550, 568);
  context.lineTo(580, 568);
  context.lineTo(576, 650);
  context.lineTo(578, 650);
  context.lineTo(550, 568);
  context.closePath();
  context.fill();
  context.strokeStyle = "#2d3138";
  context.stroke();

  //pillow right line fill inwards
  context.beginPath();
  context.moveTo(710, 180);
  context.bezierCurveTo(520, 210, 520, 410, 710, 450);
  context.fillStyle = "#e9edf8";
  context.fill();

  context.beginPath();
  context.moveTo(710, 183);
  context.bezierCurveTo(700, 210, 695, 410, 710, 450);
  context.fillStyle = "#d68d9c";
  context.fill();

  context.beginPath();
  context.moveTo(710, 450);
  context.bezierCurveTo(708, 450, 690, 375, 710, 380);
  context.fillStyle = "#8fb8c0";
  context.fill();

  //pillow line left next to leg
  context.beginPath();
  context.moveTo(430, 380);
  context.bezierCurveTo(420, 370, 388, 385, 380, 444);
  context.strokeStyle = "#818e97";
  context.lineWidth = 4;
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow line left next to leg fill
  context.beginPath();
  context.moveTo(430, 380);
  context.bezierCurveTo(580, 460, 388, 480, 380, 444);
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow bottom left corner
  context.beginPath();
  // Draw ellipse-like shape using Bézier curves
  // Assuming (x, y) is the center of the oval
  // Assuming a and b are the horizontal and vertical radius respectively

  x1 = 355;
  y1 = 460;
  a1 = 15;
  b1 = 5;

  context.moveTo(x1, y1 - b1); // Move to initial point at the top

  context.bezierCurveTo(
    x1 + a1,
    y1 - b1, // Control point 1
    x1 + a1,
    y1 + b1, // Control point 2
    x1,
    y1 + b1 // End point
  );

  context.bezierCurveTo(
    x1 - a1,
    y1 + b1, // Control point 3
    x1 - a1,
    y1 - b1, // Control point 4
    x1,
    y1 - b1 // End point, back to the top to close the path
  );

  context.closePath();

  context.stroke(); 
  context.fillStyle = "#e9edf8";
  context.fill();

  //main body
  context.beginPath();
  context.moveTo(470, 400);
  context.bezierCurveTo(320, 500, 550, 500, 550, 388);
  context.lineWidth = 4;
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "#a0d880";
  context.fill();

  //main body belt

  // Save the current state of the canvas
  context.save();

  context.translate(390 + 150 / 2, 420 + 100 / 2);

  // Rotate the canvas by 45 degrees (or any angle you desire)
  context.rotate(Math.PI / 4); // 45 degrees in radians

  // Draw the rectangle with its center at the origin
  context.beginPath();
  context.rect(-50, -50, 60, 40);
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  // Restore the canvas state to what it was before translation and rotation
  context.restore();

  //bottom leg laying down behind top leg white part(base)
  context.beginPath();

  // Draw ellipse-like shape using Bézier curves
  // Assuming (x, y) is the center of the oval
  // Assuming a and b are the horizontal and vertical radius respectively

  x1 = 390;
  y1 = 453;
  a1 = 45;
  b1 = 18;

  context.moveTo(x1, y1 - b1); // Move to initial point at the top

  context.bezierCurveTo(
    x1 + a1,
    y1 - b1, // Control point 1
    x1 + a1,
    y1 + b1, // Control point 2
    x1,
    y1 + b1 // End point
  );

  context.bezierCurveTo(
    x1 - a1,
    y1 + b1, // Control point 3
    x1 - a1,
    y1 - b1, // Control point 4
    x1,
    y1 - b1 // End point, back to the top to close the path
  );

  context.closePath();

  context.stroke(); 
  context.fillStyle = "white";
  context.fill();

  //bottom leg behind top leg black shoe part
  context.beginPath();
  context.moveTo(388, 433);
  context.bezierCurveTo(338, 425, 346, 483, 398, 473);
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  context.moveTo(384, 434);
  context.bezierCurveTo(392, 437, 402, 470, 398, 472);
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  //white bottom leg shoe cut out
  context.beginPath();
  context.moveTo(384, 436);
  context.bezierCurveTo(368, 434, 380, 448, 392, 450);
  context.fillStyle = "white";
  context.fill();

  //top leg white top part(base)
  context.beginPath();

  // Draw ellipse-like shape using Bézier curves
  // Assuming (x, y) is the center of the oval
  // Assuming a and b are the horizontal and vertical radius respectively

  x = 425;
  y = 451;
  a = 24;
  b = 34;

  context.moveTo(x, y - b); // Move to initial point at the top

  context.bezierCurveTo(
    x + a,
    y - b, // Control point 1
    x + a,
    y + b, // Control point 2
    x,
    y + b // End point
  );

  context.bezierCurveTo(
    x - a,
    y + b, // Control point 3
    x - a,
    y - b, // Control point 4
    x,
    y - b // End point, back to the top to close the path
  );

  context.closePath();

  context.stroke();
  context.fillStyle = "white";
  context.fill();

  //top leg black shoe part
  context.beginPath();
  context.moveTo(406, 456);
  context.bezierCurveTo(408, 497, 442, 497, 444, 450);
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  context.moveTo(406, 457);
  context.bezierCurveTo(408, 451, 442, 447, 444, 451);
  context.fillStyle = "black";
  context.fill();

  //white top leg shoe cut out
  context.beginPath();
  context.moveTo(409, 459);
  context.bezierCurveTo(412, 469, 420, 469, 428, 452);
  context.fillStyle = "white";
  context.fill();

  //right hand from char side
  context.beginPath();
  context.moveTo(480, 400);
  context.bezierCurveTo(440, 480, 520, 530, 485, 388);
  context.stroke();
  context.fillStyle = "#f3baa5";
  context.fill();

  //pillow line on top of head
  context.beginPath();
  context.moveTo(510, 220);
  context.bezierCurveTo(590, 188, 600, 188, 705, 175);
  context.strokeStyle = "#818e97";
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow line on top of head fill
  context.beginPath();
  context.moveTo(510, 220);
  context.bezierCurveTo(590, 240, 738, 250, 704, 175);
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow top edge
  context.beginPath();
  context.moveTo(705, 175);
  context.bezierCurveTo(701, 170, 710, 155, 720, 155);
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  context.beginPath();
  context.moveTo(710, 183);
  context.bezierCurveTo(715, 180, 723, 158, 720, 155);
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow top edge fill
  context.beginPath();
  context.moveTo(711, 183);
  context.bezierCurveTo(698, 180, 702, 158, 721, 155);
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow line right from my side
  context.beginPath();
  context.moveTo(710, 183);
  context.bezierCurveTo(700, 210, 695, 410, 710, 450);
  context.lineWidth = 2;
  context.stroke();

  //pillow line bottom diagonal
  context.beginPath();
  context.moveTo(710, 450);
  context.lineTo(685, 480);
  context.lineWidth = 3;
  context.stroke();

  //pillow line bottom
  context.beginPath();
  context.moveTo(685, 480);
  context.bezierCurveTo(640, 485, 560, 485, 491, 470);
  context.lineWidth = 4;
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //hair
  // context.beginPath();
  // context.arc(495, 290, 100, 0, Math.PI * 2, true);
  // context.fillStyle = "black";
  // context.fill();
  // context.closePath();

  //hair bottom
  context.beginPath();
  context.arc(488, 279, 125, (Math.PI * 5) / 6, Math.PI * 2, true);
  context.fillStyle = "black";
  context.fill();
  context.closePath();

  //hair left from my side
  context.beginPath();
  context.arc(470, 301, 100, Math.PI, Math.PI * 2, true);
  context.fillStyle = "black";
  context.fill();
  context.closePath();

  //pillow line on right of hair right from my side
  context.beginPath();
  context.moveTo(605, 358);
  context.bezierCurveTo(590, 310, 595, 250, 655, 220);
  context.lineWidth = 4;
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //hair right from my side
  context.beginPath();
  context.moveTo(522, 290);
  context.arc(522, 280, 100, Math.PI, (Math.PI * 7) / 4, true);
  context.fillStyle = "black";
  context.fill();
  context.closePath();

  //head
  context.beginPath();
  context.arc(500, 300, 100, 0, Math.PI * 2, true);
  context.closePath();
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "#f3baa5";
  context.fill();

  //pillow fill
  context.beginPath();
  context.moveTo(496, 445);
  context.bezierCurveTo(600, 210, 900, 552, 494, 470);
  context.fillStyle = "#e9edf8";
  context.fill();

  context.beginPath();
  context.moveTo(710, 450);
  context.bezierCurveTo(690, 420, 600, 490, 685, 480);
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow above face under left hand
  context.beginPath();
  context.moveTo(496, 445);
  context.bezierCurveTo(490, 365, 590, 355, 578, 364);
  context.strokeStyle = "#818e97";
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //pillow line below pillow above face under left hand
  context.beginPath();
  context.moveTo(525, 460);
  context.bezierCurveTo(522, 400, 580, 360, 650, 355);
  context.strokeStyle = "#818e97";
  context.stroke();
  context.fillStyle = "#e9edf8";
  context.fill();

  //left hand from char side
  context.beginPath();
  context.moveTo(578, 362);
  context.bezierCurveTo(570, 450, 655, 335, 583, 358);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "#f3baa5";
  context.fill();

  //left eyes
  context.beginPath();
  context.arc(435, 320, 50, (Math.PI * 13) / 24, (Math.PI * 5) / 4, true);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "#d2c6f5";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(428, 370);
  context.bezierCurveTo(391, 330, 410, 315, 430, 305);
  context.fillStyle = "#d2c6f5";
  context.fill();

  //left eye inner
  context.beginPath();
  context.arc(435, 320, 25, (Math.PI * 13) / 24, (Math.PI * 23) / 12, true);
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  //right eye
  context.beginPath();
  context.arc(565, 275, 50, (Math.PI * 3) / 2, Math.PI / 4, true);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "#d2c6f5";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(575, 265);
  context.bezierCurveTo(590, 255, 600, 270, 600, 313);
  context.fillStyle = "#d2c6f5";
  context.fill();

  //right eye inner
  context.beginPath();
  context.arc(565, 275, 25, (Math.PI * 5) / 6, Math.PI / 4, true);
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();

  //mouth
  context.beginPath();
  context.arc(525, 365, 32, (Math.PI * 11) / 6, (Math.PI * 44) / 48, true);
  context.lineWidth = 4;
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "black";
  context.fill();
  context.closePath();

  //tongue
  context.beginPath();
  context.moveTo(495, 372);
  context.arc(495, 372, 20, (Math.PI * 45) / 24, (Math.PI * 3) / 2, true);
  context.closePath();
  context.strokeStyle = "#6b3643";
  context.lineWidth = 1;
  context.stroke();
  context.fillStyle = "#c86b7e";
  context.fill();

  //bangs
  context.beginPath();
  context.moveTo(495, 265);
  context.arc(496, 295, 100, (Math.PI * 21) / 24, (Math.PI * 45.9) / 24, false);
  context.closePath();
  context.strokeStyle = "black";
  context.lineWidth = 4;
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  //bangs cut out
  context.beginPath();
  context.moveTo(480, 240);
  context.lineTo(485, 280);
  context.lineTo(505, 270);
  context.fillStyle = "#f3baa5";
  context.fill();

  //pink star on painting bottom right 

  context.fillStyle = "#b37b71";

  context.beginPath();

  context.moveTo(400, 5);

  context.lineTo(398, 25);
  context.lineTo(400, 45);
  context.lineTo(402, 25);
  context.lineTo(400, 5);

  context.fill();

  context.beginPath();

  context.moveTo(390, 10);

  context.lineTo(400, 30);
  context.lineTo(410, 50);
  context.lineTo(400, 20);
  context.lineTo(390, 10);

  // Stroke the path
  context.fill();

  function drawFrame(frameIndex) {
    spriteCtx.clearRect(0, 0, spriteCanvas.width, spriteCanvas.height);
    const col = frameIndex % (spriteSheet.width / spriteWidth);
    const row = Math.floor(frameIndex / (spriteSheet.width / spriteWidth));
    spriteCtx.drawImage(spriteSheet, col * spriteWidth, row * spriteHeight, spriteWidth, spriteHeight, 540, 0, spriteWidth, spriteHeight);
  }

  function animate() {
    drawFrame(currentFrame);
    currentFrame = (currentFrame + 1) % totalFrames;
    requestAnimationFrame(animate);
  }

  function startAnimation() {
    animate();
  }
};
