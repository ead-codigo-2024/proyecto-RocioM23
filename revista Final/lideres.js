document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".carousel-container");
    let scrollAmount = 0;

    
    function scrollCarousel(direction) {
        const itemWidth = container.children[0].offsetWidth;
        if (direction === "next") {
            scrollAmount += itemWidth;
        } else {
            scrollAmount -= itemWidth;
        }
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    const nextButton = document.querySelector("#next-button");
    const prevButton = document.querySelector("#prev-button");

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", function() {
            scrollCarousel("next");
        });
        prevButton.addEventListener("click", function() {
            scrollCarousel("prev");
        });
    }
});
