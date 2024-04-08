var fruitsData = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 10, color: "purple" }
];

var canvas = document.getElementById('chartCanvas');
var ctx = canvas.getContext('2d');
var barWidth = 80;
var spacing = 30;
var startX = 50;
var startY = 50;

for (var i = 0; i < fruitsData.length; i++) {
    var fruit = fruitsData[i];
    ctx.fillStyle = fruit.color;
    ctx.fillRect(startX, startY + i * (barWidth + spacing), fruit.quantity * 27, barWidth);

    // Text label for fruit name
    ctx.fillStyle = 'black';
    ctx.font = "25px Arial";
    ctx.fillText(fruit.name, startX + 16, startY + i * (barWidth + spacing) + barWidth / 2 -8);

    // Text label for quantity
    ctx.fillText(fruit.quantity, startX + 16, startY + i * (barWidth + spacing) + barWidth -8);
}
