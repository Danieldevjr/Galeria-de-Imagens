const imgContainer = document.getElementById("img");
const images = imgContainer.querySelectorAll("img");

let currentIdx = 0;

function changeImage() {
    currentIdx++;

    if (currentIdx >= images.length) {
        currentIdx = 0;
    }

    imgContainer.style.transform = `translateX(-${currentIdx * 500}px)`;
}

setInterval(changeImage, 1800);
