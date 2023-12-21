$(document).ready(function() {
    // Add click event listener to the "Home" link
    $(".nav-link[data-scroll-nav='0']").on("click", function(e) {
      e.preventDefault(); // Prevent the default behavior of the link
      window.location.href = "index.html"; // Redirect to index.html
    });

$(".nav-link[data-scroll-nav='2']").on("click", function(e) {
e.preventDefault(); // Prevent the default behavior of the link
window.location.href = "contact.html"; // Redirect to contact.html
});
});

$(document).ready(function() {

$(".nav-link[data-scroll-nav='1']").on("click", function(e) {
e.preventDefault(); // Prevent the default behavior of the link
window.location.href = "services.html"; // Redirect to services.html
});
});