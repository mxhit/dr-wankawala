$(document).ready(function() {
    var x = new Date();
    var currentDate = x.getDate() + "/" + x.getMonth() + "/" + x.getFullYear();
    document.getElementById('currentDate').innerText = "Date: " + currentDate;
});