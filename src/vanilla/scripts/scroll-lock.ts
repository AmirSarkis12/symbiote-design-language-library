// Helpful functions to enable and disable scrolling of body. Useful for when hamburger menu or modal pop up occurs.

const body = document.querySelector('body');
let scrollPosition = 0;

const scrollLock = {
     enable: function() {
        scrollPosition = window.pageYOffset;
        if (body) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';
        }

    },

    disable: function() {
        if (body) {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        }

        window.scrollTo(0, scrollPosition);
    }
}

export default scrollLock;
