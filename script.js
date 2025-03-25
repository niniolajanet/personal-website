// Ensure the lightbox is hidden on page load
window.onload = function () {
    let lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
};

// Open Lightbox
function openLightbox(imageSrc) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
    } else {
        console.error("Lightbox or lightbox image element not found.");
    }
}

// Close Lightbox
function closeLightbox() {
    let lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}
function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}
