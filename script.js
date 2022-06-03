$(".start").dblclick(function() {
    $(".beginning").fadeOut();
    $(".start").hide();
    $(".decision").show();
    $(".yes1").show();
    $(".no1").show();
    $(".welcome").text("YOU ARE THE MANAGER OF BLACKBURRY FC!");
});

$(".yes1").click(function() {
    $(".welcome").text("HE IS A ROCKSTAR!");
    $(".yes1").hide();
    $(".no1").hide();
    $(".decision").hide();
    $(".decision2").show();
    $(".game").show();
});

$(".no1").click(function() {
    $(".welcome").text("IT IS UNFORTUNATE!");
    $(".yes1").hide();
    $(".no1").hide();
    $(".decision").hide();
    $(".outcome2").show();
    $(".game2").show();
});

$(".game").click(function() {
    $(".whistle").slideDown();
});

$(".game2").click(function() {
    $(".whistle2").slideDown();
});

$(".whistle").hover(function() {
    $(".welcome").text("YEEES, YOU ARE WINNING, BUT OH NO...");
    $(".decision2").hide();
    $(".game").hide();
    $(".whistle").slideUp();
    $(".finaldecision").show();
    $(".risk").show();
    $(".replace").show();
});

$(".whistle2").hover(function() {
    $(".welcome").text("YEEES, YOU ARE WINNING, BUT OH NO...");
    $(".outcome2").hide();
    $(".game2").hide();
    $(".whistle2").slideUp();
    $(".finaldecision2").show();
    $(".risktwo").show();
    $(".replacetwo").show();
});

$(".risk").click(function() {
    $(".welcome").text("BETTER LUCK NEXT TIME!");
    $(".risk1").show();
    $(".risk").hide();
    $(".replace").hide();
    $(".finaldecision").hide();
    $("body").css("background-image", "url(https://image.shutterstock.com/image-photo/sad-sportsman-260nw-517872505.jpg");
});

$(".replace").click(function() {
    $(".welcome").text("YOU HAVE DONE IT!");
    $(".replace1").show();
    $(".replace").hide();
    $(".risk").hide();
    $(".finaldecision").hide();
    $(".replace1").css("background-color", "#3C0CFF");
    $(".replace1").css("border", "5px solid #00E018");
    $(".replace1").css("color", "#FB9C13");
    $("body").css("background-image", "url(https://media.istockphoto.com/photos/gold-soccer-award-picture-id174686400?k=20&m=174686400&s=612x612&w=0&h=pfy_YvG920zwZvuYAi0GtFYM6SQgamQPtQa2fRYNDE8=");
});

$(".risktwo").click(function() {
    $(".welcome").text("BETTER LUCK NEXT TIME!");
    $(".risk2").show();
    $(".risktwo").hide();
    $(".replacetwo").hide();
    $(".finaldecision2").hide();
    $("body").css("background-image", "url(https://image.shutterstock.com/image-photo/sad-sportsman-260nw-517872505.jpg");
});

$(".replacetwo").click(function() {
    $(".welcome").text("YOU HAVE DONE IT!");
    $(".replace2").show();
    $(".replacetwo").hide();
    $(".risktwo").hide();
    $(".finaldecision2").hide();
    $("body").css("background-image", "url(https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Vasyl,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1507302865/aqvvzhow1qlevavda6ie.jpg"); 
});