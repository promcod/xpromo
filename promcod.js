window.onload = function () {
    var clickableItems = document.getElementsByClassName("clickable");
    for (var i = 0; i < clickableItems.length; i++) {
        clickableItems[i].addEventListener("click", function () {
            toggle_visibility(this.id);
        });
    }

}

    function toggle_visibility(id) {
        var getToggleItem = document.getElementById(id).getAttribute("data-toggle");
        var e = document.getElementById(getToggleItem);
 //       alert(e);
        (e.style.display != "block") ? e.style.display = "block" :    e.style.display = "none";
    }
