let currentIndex = 0;

        function nextSlide() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card').length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card').length) % document.querySelectorAll('.card').length;
            updateSlider();
        }

        function updateSlider() {
            const cardWidth = document.querySelector('.card').offsetWidth;
            const translateValue = -currentIndex * cardWidth;
            document.querySelector('.slider-wrapper').style.transform = `translateX(${translateValue}px)`;
        }