//Скрипт должен отрабатывать при загрузке документа
$(document).ready(function() {
    // .find()
    $("div").find('.nav_button').css('color','red');
    // .next()
    $("div").next('.test').text("Lorem ipsum dolor sit amet");
    // .prev()
    var $curr = $(".test2");
    $curr.css("background", "#f99");
    $("a").click(function () {
        $curr = $curr.prev();
        $("div").css("background", "");
        $curr.css("background", "#f99");
    });
    // .parent(), .parents()
    $("#header_content_lowerboxcontent").parent().css("font-size", "50px");
    $(".test3").parents().css('color','blue'); 
    // .children()
    $("div #header_lower").children().css("border", "1px solid red");
    // .closest()
    $("div").closest("#header_content_lowerboxcontent").css('color','yellow');
    // .append()
    $(".test").append("<br><br><strong>ПРИВЕТ!</strong>");
    // .prepend()
    $(".test").prepend("<strong>ПРИВЕТ!</strong><br><br>");
    // .before()
    $("div[id^='header_content']").before("<strong>Hello</strong>");
    // .after()
    $("#copywriteblock").after("<strong>Bye</strong>");
    // .html()
    $('#logo_image').html("<p>Логотип</p>");
    // .remove()
    setTimeout(function(){
        $('.nav_button').remove(':last-child');
      }, 10000);
})




