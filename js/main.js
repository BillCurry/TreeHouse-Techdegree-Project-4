function imgSearch() {
    // Declare variables
    var caption, input, filter, ul, li, a;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    ul = document.getElementsByClassName('myUL');
    li = document.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
        caption = li[i].getAttribute("data-title");
        if (caption.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/*========Script example from W3Schools===============
<script>
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
</script>
*/