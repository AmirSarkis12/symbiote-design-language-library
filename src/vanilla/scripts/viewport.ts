// Useful for checking current screen size, similar to media queries.
const viewport = {
    xsBreakpointWidth: 576,
    sBreakpointWidth: 768,
    mdsBreakpointWidth: 992,

    xsScreen: function () {
        return (window.innerWidth < this.xsBreakpointWidth);
    },

    sScreen: function () {
        return (window.innerWidth < this.sBreakpointWidth)
    },

    mScreen: function () {
        return (window.innerWidth < this.mdsBreakpointWidth)
    }
}

export default viewport;
