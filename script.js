var box = document.querySelector('.box');
var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

function changeBorderColor() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.borderColor = randomColor;

}

setInterval(changeBorderColor, 3000);