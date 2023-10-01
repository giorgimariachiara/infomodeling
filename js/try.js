$(document).ready(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var elements = document.querySelectorAll(".section-heading-upper");
        elements.forEach(function(element) {
            var text = element.textContent.trim().split(" ");
            var lifeOf = text.slice(0, 2).join(" ");
            var verrocchio = text.slice(2).join(" ");
            element.innerHTML = lifeOf + "<br/>" + verrocchio;
        });
    });
});
