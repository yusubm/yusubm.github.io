window.addEventListener('DOMContentLoaded', (function() {
var photos = [
    "image/photo_1.jpg",
    "image/photo_2.jpg",
    "image/photo_3.jpg",
    "image/photo_4.jpg",
    "image/photo_5.jpg"
];
var currentIndex = 0;
document.getElementById('prev-btn').addEventListener('click', function() {
currentIndex = (currentIndex === 0) ? photos.length - 1 : currentIndex - 1;
document.getElementById('current-image').src = photos[currentIndex];
});

document.getElementById('next-btn').addEventListener('click', function() {
currentIndex = (currentIndex + 1) % photos.length; // 循环切换
document.getElementById('current-image').src = photos[currentIndex];
});
}));