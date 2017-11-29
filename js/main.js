function myFunction() {
    // Declare variables
    var caption, input, filter, div, a;
    input = document.getElementById('myInput');
    filter = input.value.toLowerCase();
    div = document.getElementsByClassName('image-container');
    a = document.getElementsByTagName("a");

    // Loop through all a items, and hide those who don't match the search query
    for (var i = 0; i < a.length; i++) {
        caption = document.getElementsByTagName("a")[0].getAttribute("data-title");
        if (caption.toLowerCase().indexOf(filter) > -1) {
            caption[i].style.display = "";
        } else {
            caption[i].style.display = "none";
        }
    }
}