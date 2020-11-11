document.addEventListener('DOMContentLoaded', function () {
    const sideNavigation = document.querySelector('.side-navigation');

    //TODO: Check if side nav height is taller than viewport height if so, then dont lock it in position

    if (sideNavigation) {
        calculateSetTop(sideNavigation);
    }

    window.addEventListener("resize", function () {
        if (sideNavigation) {
            calculateSetTop(sideNavigation);
        }
    });

    // Get the current "natural" positioning of the element and set it as a fixed top value to lock it in position even when scrolling
    function calculateSetTop(element: Element) {
        if (element) {
            // Reset styles before doing any calculations
            element.setAttribute ("style", "");
            var rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + scrollTop
            element.setAttribute("style", "top: " + top + "px; position: sticky;");
        }
    }

}, false);





export default {};