const toHaveClass = () => {
    return {
        compare: function(actual, expected) {
            return {
                pass: actual.getAttribute("class").then((classes) => {
                    return classes.split(" ").indexOf(expected) !== -1;
                })
            };
        }
    }
}

beforeEach(function() {
    jasmine.addMatchers({
        toHaveClass
    });
});
