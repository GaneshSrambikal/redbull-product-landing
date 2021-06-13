// Get the container element
var navListContainer = document.getElementById("nav-lists");

// Get all links with class="nav-link" inside the container
var navlinks = navListContainer.getElementsByClassName("nav-link");

// Loop through the links and add the active class to the current/clicked links
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

