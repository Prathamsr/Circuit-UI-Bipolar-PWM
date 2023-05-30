function Reset() {

    window.location.reload();
}

function showtable() {

    var r = document.getElementById("readings");
    if (r.style.display = "none") {
        r.style.display = "block";

    } else {
        r.style.display.toggle();
    }

}

function Print() {

    window.print();
}