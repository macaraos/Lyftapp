

function splash(param) {
  var time = param; setTimeout(function ()
    { $('#splashscreen').hide(); }, time);
}

$(document).ready(function(){
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

$('#formulario').bind('change keyup', function() {

    if($(this).validate().checkForm()) {

        $('#btnnext').attr('disabled', false);

    } else {

        $('#btnnext').attr('disabled', true);

    } });


})