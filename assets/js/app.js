function splash(param) {
  var time = param; setTimeout(function ()
    { $('#splashscreen').hide(); }, time);
}

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
