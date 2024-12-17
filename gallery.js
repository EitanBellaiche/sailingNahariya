document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementById("closeModal");
    const galleryImages = document.querySelectorAll(".gallery-container img");

    // הצגת התמונה במודל
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = image.src;
        });
    });

    // סגירת המודל בלחיצה על הכפתור
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // סגירת המודל בלחיצה מחוץ לתמונה
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
