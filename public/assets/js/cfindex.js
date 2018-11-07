/* global $*/

var vHeight = $(window).height();
    vWidth = $(window).width();

$("body").css({"height":vHeight,"width":vWidth});

var sideLoad = function(){
  //fade in topicbtn
  $('#topicbtn').fadeIn(33.33)
        //load default side list
      var topicText = $("#topicbtn option:selected").text();
      var listIndex = './assets/content/sidelists/' + topicText.replace(/ +/g, "-") + '.html';
      $('#side').fadeOut(33.33, function(){
        $('#side').load(listIndex, function(){
          $('#side').fadeIn(50);
        });
      });
};
var topicLoad = function(){
      //service option change, load topic
        var optionText = $("#servicebtn option:selected").text();
        var topicIndex = "./assets/content/topics/" + optionText + ".html";
        $('#topicbtn').fadeOut(33.33, function(){
          $("#topicbtn").load(topicIndex, sideLoad);
        });
  };

$(document).ready(function(){
  //load services list on page ready
  $("#servicebtn").load("./assets/content/servlist.html", topicLoad);
});

$(document).ready(function(){
  //load topic list on service option change
    $('#servicebtn').on('change', topicLoad);
  });

$(document).ready(function(){
  //load sidebar on topic option change
  $("#topicbtn").on('change', sideLoad);
});

