document.addEventListener("DOMContentLoaded", function () {
    var background = document.getElementById("background");
    var bg_images = ["image/background/image_1.png", "image/background/image_2.png", "image/background/image_3.png", "image/background/image_4.png", "image/background/image_5.png", "image/background/image_6.png"]; 
    var randomIndex = Math.floor(Math.random() * bg_images.length);
    function changeBackground() {
        background.src = bg_images[randomIndex];
    }
    changeBackground();
});