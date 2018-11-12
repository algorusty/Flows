/* global $*/
//Variables:
var vHeight = $(window).height();
    vWidth = $(window).width();

var rtime;
var timeout = false;
var delta = 100;
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
  $('#topicbtn').fadeIn(75)
      // on topic ready, load sidebar
      var topicText = $("#topicbtn option:selected").text().replace(/ +/g, "-");
      var listIndex = './assets/content/sidelists.html #' + topicText;
      //fade effect for sidebar
      $('#sidefade').fadeOut(33.33, function(){
        $('#sidefade').load(listIndex, function(){
          $('#sidefade').fadeIn(75);
        });
      });
};

var topicLoad = function(){
      //service option change, load topic

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
  $('#mainContent').fadeOut(33.33, function(){
    $('#mainContent').load(liIndex, function(){
      $('#mainContent').fadeIn(85);
    });
  });
});
};

//Calls:
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

//dark Mode
var toggled = true;

var scrollL = $('<style id="customScroll">::-webkit-scrollbar-track{border-radius: 1px;background-color: #F5F5F5;-webkit-box-shadow : inset 0 0 10px rgba(0,0,0,0.1);}::-webkit-scrollbar {width            : 6px;background-color : #F5F5F5;transform: rotateX(180deg);}::-webkit-scrollbar-thumb {border-radius: 1px;background-color: #ccc;-webkit-box-shadow : inset 0 0 20px rgba(0,0,0,.1);}</style>');

var scrollD = $('<style id="customScroll">::-webkit-scrollbar-track{border-radius: 1px;background-color: #222;-webkit-box-shadow : inset 0 0 10px rgba(0,0,0,0.1);}::-webkit-scrollbar {width            : 6px;background-color : #333;transform: rotateX(180deg);}::-webkit-scrollbar-thumb {border-radius: 1px;background-color: #222;-webkit-box-shadow : inset 0 0 20px rgba(0,0,0,.1);}</style>');

$('html > head').append(scrollD);

const darkModeOn = function(){
    $('#bod').addClass('dark1');
    $('.logo, .nava, .dropbtn, .sidebar').addClass('dark2');
    $('.dropbtn').addClass('darkbtn');
    $('.logo').addClass('logodark');
    $('.sidelist').addClass('darklist')
    $('.mainContent').addClass('maindark')
    $('#customScroll').replaceWith(scrollD);
};

const darkModeOff = function(){
    $('#bod').removeClass('dark1');
    $('.logo, .nava, .dropbtn, .sidebar').removeClass('dark2');
    $('.dropbtn').removeClass('darkbtn');
    $('.logo').removeClass('logodark');
    $('.sidelist').removeClass('darklist')
    $('.mainContent').removeClass('maindark')
    $('#customScroll').replaceWith(scrollL);
};

$(document).ready(function(){
  $('#darkMode').click(function(){
      if (toggled === false) {
      toggled = true;
      darkModeOn();
    } else if (toggled === true) {
      toggled = false;
      darkModeOff();
    }
  });
});

$(document).ajaxComplete(function(){
  if (toggled === true) {
    darkModeOn();
  } else {
    darkModeOff();
  };
});
