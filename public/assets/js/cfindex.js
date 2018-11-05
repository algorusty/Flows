var vHeight = $(window).height();
    vWidth = $(window).width();

$("body").css({"height":vHeight,"width":vWidth});


$(document).ready(function(){
  //load services list
  $("#servicebtn").load("./assets/content/servlist.html", function(){
    //load default topic
    var optionText = $("#servicebtn option:selected").text();
    var topicIndex = "./assets/content/topics/" + optionText + ".html";
    $("#topicbtn").load(topicIndex, function(){
      //load default side list
      var topicText = $("#topicbtn option:selected").text();
      var listIndex = './assets/content/sidelists/' + topicText.replace(/ +/g, "-") + '.html';
      $("#side").load(listIndex);
    });
  });
});

$(document).ready(function(){
    $('#servicebtn').on('change', function(){
      //service option change, load topic
        var optionText = $("#servicebtn option:selected").text();
        var topicIndex = "./assets/content/topics/" + optionText + ".html";
        $("#topicbtn").load(topicIndex, function(){
          //load default sidelist
          var topicText = $("#topicbtn option:selected").text();
          var listIndex = './assets/content/sidelists/' + topicText.replace(/ +/g, "-") + '.html';
          $("#side").load(listIndex);
    });
  });
});

$("document").ready(function(){
  $("#topicbtn").on('change', function(){
    // load sidelists
    var topicText = $("#topicbtn option:selected").text();
    var listIndex = "./assets/content/sidelists/" + topicText.replace(/ +/g, "-") + ".html";
    $("#side").load(listIndex);
  });
});



/*
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
*/
/*
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".dropdown");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.dropdown-box').slideUp(80);
    }
});
*/
