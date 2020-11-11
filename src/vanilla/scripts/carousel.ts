let playing = true;
let visibleSlideIndex = 0;

// Default set to 5 seconds
const INTERVAL = 5000

// TODO: Add caption feature to slides
// TODO: Add swipe functionality to swap between slides

function initCarousel() {
    const nextSlide = document.querySelector('.next-slide');
    const previousSlide = document.querySelector('.previous-slide');
    const playPause = document.querySelector('.play-pause');
    const playPauseIcon = document.querySelector('.play-pause i');
    const slides = document.querySelectorAll('.carousel-slide');
    const carouselDotsContainer = document.querySelector('.carousel-dots-container');

    // Set the interval timer for the first time
    let slideInterval = setInterval(goToNextSlide, INTERVAL);

    // Loop through slides and create a dot for each one
    slides.forEach(function (element, index) {
        var dot = document.createElement('button');
        dot.classList.add('carousel-dot');

        // Assign a click listener to each dot to select the specific index
        dot.addEventListener('click', () => {
            goToSpecificSlide(index)
        });

        if (carouselDotsContainer) {
            carouselDotsContainer.appendChild(dot);
        }
    });

    const carouselDots = document.querySelectorAll('.carousel-dot');
    slides[visibleSlideIndex].classList.add('visible');
    carouselDots[visibleSlideIndex].classList.add('active');

    if (playPause) {
        playPause.addEventListener('click', () => {
            playing ? pauseCarousel() : playCarousel();
        });
    }

    if (nextSlide) {
        // Move to the next slide
        nextSlide.addEventListener('click', () => {
            clearIntervalTimer();

            slides[visibleSlideIndex].classList.remove('visible');
            carouselDots[visibleSlideIndex].classList.remove('active');

            visibleSlideIndex += 1;

            if (visibleSlideIndex >= slides.length) {
                visibleSlideIndex = 0;
            }

            slides[visibleSlideIndex].classList.add('visible');
            carouselDots[visibleSlideIndex].classList.add('active');

            // When the next slide button is clicked, make sure to reset the interval to avoid images swapping right away
            restartIntervalTimer();
        });
    }

    if (previousSlide) {
        // Move to the previous slide
        previousSlide.addEventListener('click', () => {
            clearIntervalTimer();

            slides[visibleSlideIndex].classList.remove('visible');
            carouselDots[visibleSlideIndex].classList.remove('active');

            visibleSlideIndex -= 1;

            if (visibleSlideIndex < 0) {
                visibleSlideIndex = slides.length - 1;
            }
            slides[visibleSlideIndex].classList.add('visible');
            carouselDots[visibleSlideIndex].classList.add('active');

            // When the previous slide button is clicked, make sure to reset the interval to avoid images swapping right away
            restartIntervalTimer();
        });
    }

    // Moves accross the array of slides
    function goToNextSlide() {
        // Hide currently visible slide
        slides[visibleSlideIndex].classList.remove('visible');
        carouselDots[visibleSlideIndex].classList.remove('active');

        // Iterate one index
        visibleSlideIndex += 1;

        // If we hit the end of the array, then start from the begining
        if (visibleSlideIndex >= slides.length) {
            visibleSlideIndex = 0;
        }

        // Set slide by updated index to be visible
        slides[visibleSlideIndex].classList.add('visible');
        carouselDots[visibleSlideIndex].classList.add('active');
    }

    // Move to specific slide based on index parameter
    function goToSpecificSlide(index: number) {
        clearIntervalTimer();

        // Hide currently visible slide
        slides[visibleSlideIndex].classList.remove('visible');
        carouselDots[visibleSlideIndex].classList.remove('active');

        // Set slide by index parameter to be visible
        slides[index].classList.add('visible');
        carouselDots[index].classList.add('active');

        // Update the currently visible index value
        visibleSlideIndex = index;

        // When going to a specific slide, make sure to reset the interval to avoid images swapping right away
        restartIntervalTimer();
    }

    // Play carousel
    function playCarousel() {
        if (playPause) {
            playing = true;
            restartIntervalTimer();
            swapPlayPauseIcon();
        }
    }

    // Pause carousel
    function pauseCarousel() {
        if (playPause && playPauseIcon) {
            playing = false;
            clearIntervalTimer();
            swapPlayPauseIcon();
        }
    }

    // Clear the interval timer
    function clearIntervalTimer() {
        clearInterval(slideInterval);
    }

    // Reset the interval timer
    function restartIntervalTimer() {
        slideInterval = setInterval(goToNextSlide, INTERVAL);

        // Check if currently paused, if so swap the icons over and set playing to true
        if (!playing) {
            swapPlayPauseIcon();
            playing = true;
        }
    }

    // Swap the play and pause icons
    function swapPlayPauseIcon() {
        if (playPauseIcon) {
            playPauseIcon.classList.toggle("la-pause-circle");
            playPauseIcon.classList.toggle("la-play-circle");
        }
    }

}

export default initCarousel;