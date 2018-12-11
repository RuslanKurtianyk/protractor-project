by.addLocator("empty-link", function (href, parentElement) {
    parentElement = parentElement || document;
    var links = parentElement.querySelectorAll("a");
    return Array.prototype.filter.call(links, function (link) {
        return (link.href && ((link.href === href) || (link.href === (link.baseURI + href))));
    });
});


