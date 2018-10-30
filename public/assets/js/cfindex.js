
$(document).ready(function(){
  $("#servicebtn").load("./assets/content/servlist.html");
});

$(document).ready(function(){
    $('#servicebtn').on('change', function(){
        var optionText = $("#servicebtn option:selected").text();
        var topicIndex = "'./assets/content/topiclist.txt #" + optionText +"'";
        $("#topicbtn").load(topicIndex);
        alert(topicIndex);
    });
});

$(function(){
  $("#servicebtn").click(function(){
    $("#serviceDropdown").slideToggle(80);
});
});

$(function(){
  $("#topicbtn").click(function(){
    $("#topicDropdown").slideToggle(80);
});
});


$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".dropdown");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.dropdown-box').slideUp(80);
    }
})