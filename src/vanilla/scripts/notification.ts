document.addEventListener('DOMContentLoaded', function () {
    const notification = document.querySelector('.notification');
    const breadcrumbs = document.querySelector('.breadcrumbs');

    // If notification banner is on the page
    if (notification) {
        // Check if breadcrumbs exist on the page, if so set the top position of notification banner to take that in to account.
        if (breadcrumbs) {
            // 4rem for nav + 2rem for breadcrumbs
            notification.setAttribute("style", "top: 6rem");
            //otherwise set top position to just below the nav height (4rem).
        } else {
            // 4rem for nav
            notification.setAttribute("style", "top: 4rem");
        }
    }
}, false);

export default {};