$(window).load(function(){
    $("#pageloader").delay(1000).fadeOut("slow");
})
console.log($('.col-md-4'))
$('.col-md-4').addClass("box")

var box1=$('#box1');
box1.removeClass("box");
var box2=$('#box2')
box2.fadeOut(1400);