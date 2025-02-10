let currentIndex = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Ensure the first slide is displayed correctly on page load
showSlide(currentIndex);