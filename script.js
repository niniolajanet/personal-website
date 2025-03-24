document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my website!");
});
// Open Lightbox
function openLightbox(imageSrc) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Ensure the lightbox is hidden on page load
window.onload = function () {
    document.getElementById('lightbox').style.display = 'none';
};

