const projectItems = document.querySelectorAll('.project-item');
const carouselItems = document.querySelectorAll('.carousel-item');

projectItems.forEach((item) => {
    item.addEventListener('mouseover', function() {
        const projectIndex = this.getAttribute('data-project');
        carouselItems.forEach((carouselItem, index) => {
            if (index == projectIndex - 1) {
                carouselItem.classList.add('active');
            } else {
                carouselItem.classList.remove('active');
            }
        });
    });
});
