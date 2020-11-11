// This script handles the toggling of navigation drop down links, hamburger menu, scroll locking etc.

import scrollLock from './scroll-lock'
import viewport from './viewport';

// Added the following event listeners only once the DOM has loaded
function initMainNav() {
    const nav = document.querySelector('.nav');
    const navContainer = document.querySelector('.navigation');
    const dropDown = document.querySelector('.nav__drop-down-link__toggle');
    const dropDownList = document.querySelector('.nav__drop-down-list');
    const hamburgerNavToggleCheckbox = document.querySelector('.hamburger-nav-toggle-checkbox') as HTMLInputElement;

    // Create darken overlay for adding to the DOM later
    const darkenOverlay = document.createElement('div');
    darkenOverlay.className = "darken-overlay";

    // Listen for all clicks on the document
    document.addEventListener('click', function (event) {
        // Toggle drop down list visibility on drop down click
        if (dropDown && event.target === dropDown) {
            dropDown.classList.toggle('nav__drop-down-list--visible');
        }

        // Hide drop down list when click occurs outside of drop down or drop down list
        if (event.target !== dropDown && event.target !== dropDownList && dropDown) {
            dropDown.classList.remove('nav__drop-down-list--visible');
        }

        // If click occurs outside the hamburger menu then remove darken overlay from DOM, unlock the scrollability of body and hide the hamburger menu
        if (event.target === darkenOverlay || event.target === nav) {
            if (darkenOverlay && darkenOverlay.parentNode) {
                darkenOverlay.parentNode.removeChild(darkenOverlay);
            }
            scrollLock.disable();

            // Un-check hamburger toggle checkbox
            hamburgerNavToggleCheckbox.checked = false;
        }
    }, false);

    if (hamburgerNavToggleCheckbox) {
        // Listen for when nav toggle checkbox changes
        hamburgerNavToggleCheckbox.addEventListener('change', function () {
            // If check occurs
            if (hamburgerNavToggleCheckbox.checked) {

                if (navContainer && navContainer.parentNode) {
                    // Add darken overlay to DOM
                    navContainer.parentNode.prepend(darkenOverlay);

                    // Set visibility on darken overlay
                    darkenOverlay.classList.add('darken-overlay--visible')
                }

                // Lock the scrollability of body
                scrollLock.enable();
            } else {
                // Remove darken overlay from DOM
                if (darkenOverlay && darkenOverlay.parentNode) {
                    darkenOverlay.parentNode.removeChild(darkenOverlay);
                }

                // Unlock the scrollability of body
                scrollLock.disable();
            }
        });
    }

    window.addEventListener("resize", function () {
        // If screen is not small and the hamburger toggle checkbox is checked then remove darken overlay from DOM and unlock the scrollability of body
        if (!viewport.sScreen() && hamburgerNavToggleCheckbox.checked){
            if (darkenOverlay && darkenOverlay.parentNode) {
                darkenOverlay.parentNode.removeChild(darkenOverlay);
            }
            scrollLock.disable();

            // Un-check hamburger toggle checkbox
            hamburgerNavToggleCheckbox.checked = false;
        }
    });
}

export default initMainNav;