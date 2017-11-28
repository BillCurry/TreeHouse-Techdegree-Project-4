


// function myFunction() {
//     // Declare variables
//     var caption, input, filter, div, a;
//     caption = document.getElementsByTagName("a")[0].getAttribute("data-title");
//     input = document.getElementById('myInput');
//     filter = input.value.toLowerCase();
//     div = document.getElementByClass('image-container');
//     a = document.getElementsByTagName("a");

//     // Loop through all a items, and hide those who don't match the search query
//     for (var i = 0; i < a.length; i++) {
//         a = .image-container[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
//             a[i].style.display = "";
//         } else {
//             a[i].style.display = "none";
//         }
//     }
// }


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
        if (caption.innerHTML.toUpperCase().indexOf(filter) > -1) {
            caption[i].style.display = "";
        } else {
            caption[i].style.display = "none";
        }
    }
}