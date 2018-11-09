/* global $*/

var vHeight = $(window).height();
    vWidth = $(window).width();

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
  rtime = new Date();
  if (timeout === false) {
    timeout = true;
      setTimeout(resizeend, delta);
    };
});

function resizeend() {
  if (new Date() - rtime < delta) {
    setTimeout(resizeend, delta);
  } else {
    timeout = false;
    var vHeight = $(window).height();
        vWidth = $(window).width();
    $("body").css({"height":vHeight,"width":vWidth});
  };
};

$(document).ready( function(){
  $("body").css({"height":vHeight,"width":vWidth});
});

var sideLoad = function(){
  //fade in topicbtn
  $('#topicbtn').fadeIn(33.33)
      // on topic ready, load sidebar
      var topicText = $("#topicbtn option:selected").text().replace(/ +/g, "-");
      var listIndex = './assets/content/sidelists.html #' + topicText;
      //fade effect for sidebar
      $('#side').fadeOut(33.33, function(){
        $('#side').load(listIndex, function(){
          $('#side').fadeIn(50);
        });
      });
};

var topicLoad = function(){
      //service option change, load topic
      alert('works')
        var optionText = $("#servicebtn option:selected").text().replace(/ +/g, "-");
        var topicIndex = "./assets/content/topics.html #" + optionText;
        //fade effect for topics
        $('#topicbtn').fadeOut(33.33, function(){
          $("#topicbtn").load(topicIndex, sideLoad);
        });
  };

var mainLoad = function(){
  //on sidebar item click, load main content
$('.sidebar').on('click', 'li', function(){
  var liText = $(this).text().replace(/ +/g, "-");
  var liIndex = './assets/content/maincont.html #' + liText;
  $('#mainContent').load(liIndex);
});

};

$(mainLoad);

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
