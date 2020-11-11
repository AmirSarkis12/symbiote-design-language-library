const focusTrap = {
    enable: function (modal: Element) {
        // Add all the commonly focusable elements for inside the modal
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        if (modal) {
            // Get the first element that can focused inside modal
            const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] as HTMLElement;
            const focusableContent = modal.querySelectorAll(focusableElements);

            // Get the last element that can be focused inside modal
            const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

            document.addEventListener('keydown', function (e) {
                let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                // Break early if key pressed is not tab
                if (!isTabPressed) {
                    return;
                }

                // If shift key pressed for shift + tab combination
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        // Set focus on the the last focusable element
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                    // If tab key is pressed
                } else {
                    // If focus has reached the last focusable element then return focus to the first focusable element
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            });

            // Set focus to first focusable element within the modal
            firstFocusableElement.focus();
        }
    },

    // Remove key listener for tab behaviour
    disable: function (priorFocusedElement: HTMLElement) {
        document.removeEventListener('keydown', function () {
            // Restore focus back to element which was focused prior to modal
            if (priorFocusedElement) {
                priorFocusedElement.focus();
            }
        });
    }
}

export default focusTrap;